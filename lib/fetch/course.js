import fs from "fs"
import path from "path"
import { find, getmediaUrl, metatags_schema } from "./helpers"
import { getCategoriesBasics, getCategoryBasics } from "./category"
import { lessons_count } from "./lesson"
import { fetchcourses } from "../../storecategories"

export const basiccourse_schema = async entity => ({
    title: entity.attributes.Title,
    svg: getmediaUrl(entity),
    slug: entity.attributes.Slug,
    level: entity.attributes.level,
    paid: entity.attributes.paid,
    lessons_count: await lessons_count(entity.attributes.Slug),
    metatags: metatags_schema(entity.attributes.SEO),
    href: entity.attributes.href,
})

export async function readCourses() {
    const jsonData = process.env.READ_DATA == 'online' ? await fetchcourses() : JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/courses.json'), 'utf-8'))
    return jsonData.data.map(entity => {
        entity.attributes.href = `/${entity.attributes.category.data ? `${entity.attributes.category.data.attributes.Slug}/` : ''}${entity.attributes.Slug}/`
        return entity
    })
}

export async function getCourses() {
    return readCourses()
}

export async function getCoursesBasics(cat_slug) {
    return readCourses()
    .then(courses => courses.filter(({attributes}) => attributes.Slug != 'articles'))
    .then(courses => courses.filter(({attributes}) => attributes.Slug != 'blog'))
    .then(allcourses => allcourses.filter(({attributes}) => attributes.category.data.attributes.Slug == cat_slug))
    .then(async courses => ({
        category: await getCategoryBasics(cat_slug),
        courses: !courses ? [] : await Promise.all(courses.map(basiccourse_schema))
    }))
}

export async function getCourseBasics(course_slug) {
    return readCourses()
    .then(courses => find(courses, course_slug))
    .then(basiccourse_schema)
}

export async function getCourse(course_slug) {
    return readCourses()
    .then(allcourses => find(allcourses, course_slug))
}

export async function getAllCoursesBasics() {
    return readCourses()
    .then(courses => courses.map(course => ({
        category_slug: course.attributes.category.data?.attributes.Slug || null,
        course_slug: course.attributes.Slug,
        title: course.attributes.Title,
    })))
}

export async function getCoursesByCategories() {
    const categorieslist = {}
    await getCategoriesBasics()
    .then(async categories => {await Promise.all(categories.map(async ({slug}) => categorieslist[slug] = await getCoursesBasics(slug)))})
    return categorieslist
}

export const course_count = async (cat_slug) => {
    return readCourses()
    .then(courses => courses.filter(({attributes}) => attributes.Slug != 'articles'))
    .then(courses => courses.filter(({attributes}) => attributes.Slug != 'blog'))
    .then(allcourses => allcourses.map(({attributes}) => attributes.category.data).filter(({attributes}) => attributes.Slug == cat_slug).length)
}