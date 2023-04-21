import fs from "fs"
import path from "path"
import { find, getmediaUrl, metatags_schema } from "./helpers"
import { course_count } from "./course"

export const basiccategory_schema = async entity => ({
    title: entity.attributes.Title,
    svg: getmediaUrl(entity),
    slug: entity.attributes.Slug,
    courses_count: await course_count(entity.attributes.Slug),
    metatags: metatags_schema(entity.attributes.SEO),
})

export async function readCategories() {
    const filePath = path.join(process.cwd(), 'public/data/categories.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData).data
}

export async function getCategory(cat_slug) {
    return readCategories()
    .then(categories => find(categories, cat_slug))
}

export async function getCategoriesBasics() {
    return readCategories()
    .then(async categories => await Promise.all(categories.map(basiccategory_schema)))
}

export async function getCategoryBasics(cat_slug) {
    return getCategory(cat_slug)
    .then(basiccategory_schema)
}