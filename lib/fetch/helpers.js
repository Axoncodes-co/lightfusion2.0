import fs from "fs"
import path from "path"

export const find = (entities, target_slug) => {
    if (!entities) return null
    const founds = entities.filter(({attributes}) => attributes.Slug == target_slug)
    return founds.length > 0 ? founds[0] : null
}

export const metatags_schema = SEO => ({
    title: SEO.metaTitle,
    description: SEO.metaDescription,
    keywords: SEO.keywords,
})

export const getmediaUrl = entity => !entity.attributes.SEO ? '' : fs.readFileSync(path.join(process.cwd(), `public/data/media/${entity.attributes.SEO.metaImage.data.attributes.hash+entity.attributes.SEO.metaImage.data.attributes.ext}`), 'utf-8')