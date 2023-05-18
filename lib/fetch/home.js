import fs from "fs"
import path from "path"
import { process_content } from "./lesson"

export async function readHome() {
    const jsonData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/home.json'), 'utf-8'))
    jsonData.data.attributes.hero_description = process_content(jsonData.data.attributes.hero_description)
    return jsonData.data
}