const fs = require('fs');
const path = require('path');

const urls = [
  { url: '', changefreq: 'weekly', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
];

const jsonData = fs.readFileSync(path.join(process.cwd(), 'public/data/categories.json'), 'utf-8')
const categories = JSON.parse(jsonData)
categories.forEach(category => {
  urls.push({url: `/${category.slug}`, changefreq: 'monthly', priority: 0.8})
  category.courses.forEach(course => {
    urls.push({url: `/${category.slug}/${course.slug}`, changefreq: 'monthly', priority: 0.8})
    course.lessons.forEach(lesson => {
      urls.push({
        url: `/${category.slug}/${course.slug}/${lesson.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        redirect: `/${category.slug}/${lesson.slug}`,
        imageslist: lesson.imageslist
      })
    })
  })
})

// categories.forEach(category => {
//   urls.push({url: `/${category.slug}`, changefreq: 'monthly', priority: 0.5})
//   category.courses.forEach(course => {
//     urls.push({url: `/${category.slug}/${course.slug}`, changefreq: 'monthly', priority: 0.4})
//     course.lessons.forEach(lesson => {
//       urls.push({url: `/${category.slug}/${course.slug}/${lesson.slug}`, changefreq: 'monthly', priority: 0.3})
//     })
//   })
// })


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