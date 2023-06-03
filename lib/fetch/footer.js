import fs from "fs"
import path from "path"
import { process_content } from "./lesson"

export async function readFooter() {
    const jsonData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/footer.json'), 'utf-8'))
    // jsonData.data.attributes.hero_description = process_content(jsonData.data.attributes.hero_description)
    return jsonData.data
}