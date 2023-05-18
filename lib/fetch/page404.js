import fs from "fs"
import path from "path"
import { process_content } from "./lesson"

export async function read404() {
    const jsonData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/page404.json'), 'utf-8'))
    jsonData.data.attributes.Content = process_content(jsonData.data.attributes.Content)
    return jsonData.data
}