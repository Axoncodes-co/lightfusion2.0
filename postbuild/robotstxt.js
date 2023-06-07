const fs = require('fs');
const path = require('path');
require('dotenv').config();

const robotsContent = process.env.PRODUCTION == "true" ? productionRobotstxt() : stagingRobotstxt()
function productionRobotstxt() {
  let content = ''
  content += 'User-agent: *\n'
  content += 'Allow: /\n'
  content += `Sitemap: ${process.env.DOMAIN}/sitemap.xml`
  return content
}

function stagingRobotstxt() {
  let content = ''
  content += 'User-agent: *\n'
  content += 'Disallow: /'
  return content
}
fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsContent)