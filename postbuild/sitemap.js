const fs = require('fs');
const path = require('path');
require('dotenv').config();

const urls = [
  { url: '', changefreq: 'monthly', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/categories.json'), 'utf-8')).data.forEach(category => {
  urls.push({
    url: `/${category.attributes.Slug}`,
    changefreq: 'monthly',
    priority: 0.8
  })
  
})

JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/courses.json'), 'utf-8')).data.forEach(course => {
  urls.push({
    url: `/${course.attributes.category.data?(course.attributes.category.data.attributes.Slug+'/') : ''}${course.attributes.Slug}`,
    changefreq: 'monthly',
    priority: 0.8
  })
})

JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/lessons.json'), 'utf-8')).data.forEach(lesson => {
  urls.push({
    url: `/${lesson.attributes.course.data.attributes.category.data?lesson.attributes.course.data.attributes.category.data.attributes.Slug+'/':''}${lesson.attributes.course.data.attributes.Slug}/${lesson.attributes.Slug}`,
    changefreq: 'monthly',
    priority: 0.8,
    imageslist: lesson.imageslist
  })
})
let xmlContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`
// pages
urls.forEach(url => {
  const link = `${process.env.DOMAIN}${url.url}/`
  xmlContent += `<url>\n`
  xmlContent += ` <loc>${link}</loc>\n`
  xmlContent += ` <priority>${url.priority}</priority>\n`
  if (url.imageslist) {
    url.imageslist.forEach(image => {
      xmlContent += `
        <image:image>
          <image:loc>${process.env.DOMAIN}${image}</image:loc>
        </image:image>\n`
    })
  }
  xmlContent += `</url>\n`
})

xmlContent += `</urlset>`
fs.writeFileSync('./public/sitemap.xml', xmlContent)