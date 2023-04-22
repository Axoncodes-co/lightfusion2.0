import fs from "fs"
import path from "path"

export async function readLevels() {
    const filePath = path.join(process.cwd(), 'public/data/levels.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData).data
}