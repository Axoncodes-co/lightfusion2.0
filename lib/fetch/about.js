import fs from "fs"
import path from "path"
import { process_content } from "./lesson"

export async function readAbout() {
    const jsonData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/about.json'), 'utf-8'))
    jsonData.data.attributes.Content = process_content(jsonData.data.attributes.Content)
    return jsonData.data
}