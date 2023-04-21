import fs from "fs"
import path from "path"
import { find, getmediaUrl, metatags_schema } from "./helpers"

export const basiclesson_schema = entity => ({
    title: entity.attributes.Title,
    slug: entity.attributes.Slug,
    thumbnail_url: entity.attributes.SEO.metaImage.data.attributes.hash+entity.attributes.SEO.metaImage.data.attributes.ext,
    tags: entity.attributes.Tags || [],
    updateDate: entity.attributes.updatedAt,
    title: entity.attributes.Title,
    publishDate: entity.attributes.createdAt,
    metatags: metatags_schema(entity.attributes.SEO),
})

export async function readLessons() {
    const filePath = path.join(process.cwd(), 'public/data/lessons.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData).data
}

export async function getLessons(course_slug) {
    return readLessons()
    .then(lessons => lessons.filter(lesson => lesson.attributes.course.data.attributes.Slug == course_slug))
}

export async function getLessonsBasics(course_slug) {
    return getLessons(course_slug)
    .then(async lessons => !lessons ? [] : await Promise.all(lessons.map(basiclesson_schema)))
}
