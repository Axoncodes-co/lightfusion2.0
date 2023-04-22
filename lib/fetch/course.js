import fs from "fs"
import path from "path"
import { find, getmediaUrl, metatags_schema } from "./helpers"
import { getCategoriesBasics, getCategoryBasics } from "./category"
import { lessons_count } from "./lesson"

export const basiccourse_schema = async entity => ({
    title: entity.attributes.Title,
    svg: getmediaUrl(entity),
    slug: entity.attributes.Slug,
    level: entity.attributes.level,
    paid: entity.attributes.paid,
    lessons_count: await lessons_count(entity.attributes.Slug),
    metatags: metatags_schema(entity.attributes.SEO),
})

export async function readCourses() {
    const filePath = path.join(process.cwd(), 'public/data/courses.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData).data
}

export async function getCourses(cat_slug) {
    return readCourses()
    .then(courses => find(courses, cat_slug))
}

export async function getCoursesBasics(cat_slug) {
    return readCourses()
    .then(allcourses => allcourses.filter(({attributes}) => attributes.category.data.attributes.Slug == cat_slug))
    .then(async courses => ({
        category: await getCategoryBasics(cat_slug),
        courses: !courses ? [] : await Promise.all(courses.map(basiccourse_schema))
    }))
}

export async function getCoursesByCategories() {
    const categorieslist = {}
    await getCategoriesBasics()
    .then(async categories => {await Promise.all(categories.map(async ({slug}) => categorieslist[slug] = await getCoursesBasics(slug)))})
    return categorieslist
}

export const course_count = async (cat_slug) => {
    return readCourses()
    .then(allcourses => allcourses.map(({attributes}) => attributes.category.data).filter(({attributes}) => attributes.Slug == cat_slug).length)
}