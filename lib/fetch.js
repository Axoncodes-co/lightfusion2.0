
const fs = require('fs')
const path = require('path')
export default async function fetchup() {
    const filePath = path.join(process.cwd(), 'public/data/categories.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}

export async function getCategories() {
    const filePath = path.join(process.cwd(), 'public/data/categories.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}

export async function getCourses() {
    const filePath = path.join(process.cwd(), 'public/data/courses.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}

export async function getLessons() {
    const filePath = path.join(process.cwd(), 'public/data/lessons.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}

export async function getCategoriesBasic() {
    return getCategories()
    .then(categories => categories.data)
    .then(async categories => await Promise.all(categories.map(async ({attributes}) => ({
        title: attributes.Title,
        svg: !attributes.SEO ? '' : path.join(process.cwd(), `public/data/media/${attributes.SEO.metaImage.data.attributes.hash+attributes.SEO.metaImage.data.attributes.ext}`),
        slug: attributes.Slug,
        courses_count: await course_count(attributes.Slug),
    }))))
}

export async function getCategoryCoursesBasic(cat_slug) {
    return getCategoryCourses(cat_slug)
    .then(async courses => await Promise.all(courses.map(async ({attributes}) => ({
        title: attributes.Title,
        svg: !attributes.SEO ? '' : path.join(process.cwd(), `public/data/media/${attributes.SEO.metaImage.data.attributes.hash+attributes.SEO.metaImage.data.attributes.ext}`),
        slug: attributes.Slug,
    }))))
}

export async function course_count(cat_slug) {
    return getCategoryCourses(cat_slug)
    .then(leftCourses => leftCourses.length)
}

export async function getCategoryCourses(cat_slug) {
    return getCourses()
    .then(courses => courses.data)
    .then(courses => courses.filter(({attributes}) => attributes.category.data.attributes.Slug == cat_slug))
}

export async function getCategory(cat_slug) {
    return getCategories()
    .then(category => category.data)
    .then(categories => categories.filter(({attributes}) => attributes.Slug == cat_slug))
}

export async function getCourseLessons(course_slug) {
    return getLessons()
    .then(lessons => lessons.data)
    .then(lessons => lessons.filter(({attributes}) => attributes.course.data?.attributes.Slug == course_slug))
}

export async function getCourseLessonsBasic(course_slug) {
    return getCourseLessons(course_slug)
    .then(async lessons => await Promise.all(lessons.map(async ({attributes}) => ({
        title: attributes.Title,
        slug: attributes.Slug,
        thumbnail_url: !attributes.SEO ? '' : `/data/media/${attributes.SEO.metaImage.data.attributes.hash+attributes.SEO.metaImage.data.attributes.ext}`,
        tags: attributes.Tags || [],
        updateDate: attributes.updatedAt,
        title: attributes.Title,
        publishDate: attributes.createdAt,
    }))))
}