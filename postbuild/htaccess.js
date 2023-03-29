const fs = require('fs');
const path = require('path');

const urls = [
  { url: '/', changefreq: 'weekly', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
];

const jsonData = fs.readFileSync(path.join(process.cwd(), 'public/data/categories.json'), 'utf-8')
const categories = JSON.parse(jsonData)
categories.forEach(category => {
  urls.push({url: `/${category.slug}`, changefreq: 'monthly', priority: 0.5})
  category.courses.forEach(course => {
    urls.push({url: `/${category.slug}/${course.slug}`, changefreq: 'monthly', priority: 0.4})
    course.lessons.forEach(lesson => {
      urls.push({url: `/${category.slug}/${course.slug}/${lesson.slug}`, changefreq: 'monthly', priority: 0.3, redirect: `/${category.slug}/${lesson.slug}`})
    })
  })
})


let xmlContent = ''
// pages
urls.forEach(url => {
  xmlContent += url.redirect ? `Redirect 301 ${url.redirect} https://www.homapilot.com${url.url}\n` : ''
})


const jsonMedia = fs.readFileSync(path.join(process.cwd(), 'public/data/media/info.json'), 'utf-8')
const medias = JSON.parse(jsonMedia)

medias.forEach(media => {
  xmlContent += `Redirect 301 /data/media${media.url.slice(media.url.lastIndexOf('/'))} https://${media.url.slice(media.url.indexOf('blog.')+5)}\n`
})
fs.writeFileSync('./public/.htaccess', xmlContent)