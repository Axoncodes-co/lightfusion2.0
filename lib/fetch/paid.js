import fs from "fs"
import path from "path"

export async function readPaids() {
    const filePath = path.join(process.cwd(), 'public/data/paids.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData).data
}