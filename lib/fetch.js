
const fs = require('fs')
const path = require('path')
export default async function fetchup() {
    const filePath = path.join(process.cwd(), 'public/categories.json')
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(jsonData)
}