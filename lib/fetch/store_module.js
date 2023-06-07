
const fs = require('fs')
require('dotenv').config();

async function downloadImage(imageUrl, imagePath) {
  return fetch(imageUrl, {
    method: 'GET',
    timeout: 100000
  })
  .then(response => response.arrayBuffer())
  .then(buffer => fs.promises.writeFile(imagePath, Buffer.from(buffer)))
}

async function storeimages(categories) {
  return Promise.all(categories
    .map(category => ({
      ...category,
      courses: category.courses
      .map(course => ({
        ...course,
        lessons: course.lessons
        .map(lesson => {
          let modified_lesson = lesson
          // modify the thumbnail
          if (lesson.thumbnail_url) {
            downloadImage(lesson.thumbnail_url, `./public/data/media/${lesson.thumbnail_url.slice(lesson.thumbnail_url.lastIndexOf('/')+1)}`)
            modified_lesson = ({
              ...modified_lesson,
              original_thumbnail_url: lesson.thumbnail_url,
              thumbnail_url: `/data/media/${lesson.thumbnail_url.slice(lesson.thumbnail_url.lastIndexOf('/')+1)}`
            })
          }
          return modified_lesson
        })
      }))
    }))
  )
}

async function fetchData(url) {
  var myHeaders = new Headers()
  myHeaders.append("Authorization", `Bearer ${process.env.CMS_TOKEN}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    timeout: 100000
  }

  const response = await fetch(url, requestOptions)
  const data = await response.json()
  return data
}

async function writeToFile(data, address) {
  try {
    fs.promises.writeFile(address, JSON.stringify(data))
    console.log('Data written to file successfully!')
  } catch (err) {
    console.error('Error writing data to file:', err)
  }
}

const fetchlessons = async () => await fetchData(process.env.CMS_BASE_URL+'/api/lessons?populate=course.category.SEO&populate=course.SEO&populate=SEO&populate=users_permissions_user&populate=SEO.metaImage&populate=Previous&populate=Next&populate=users_permissions_user.Avatar&populate=Previous.course.category&populate=Next.course.category')
const fetchcourses = async () => await fetchData(process.env.CMS_BASE_URL+'/api/courses?populate=SEO.metaImage&populate=category&populate=category.SEO.metaImage&populate=level&populate=paid')
const fetchcategories = async () => await fetchData(process.env.CMS_BASE_URL+'/api/category-configs?populate=SEO.metaImage')
const fetchpaids = async () => await fetchData(process.env.CMS_BASE_URL+'/api/paids')
const fetchlevels = async () => await fetchData(process.env.CMS_BASE_URL+'/api/levels')
const fetchfiles = async () => await fetchData(process.env.CMS_BASE_URL+'/api/upload/files');
const fetchhome = async () => await fetchData(process.env.CMS_BASE_URL+'/api/home?populate=SEO.metaImage&populate=hero_image&populate=home_courses_preview');
const fetchabout = async () => await fetchData(process.env.CMS_BASE_URL+'/api/about?populate=SEO.metaImage&populate=hero_image');
const fetchcontact = async () => await fetchData(process.env.CMS_BASE_URL+'/api/contact?populate=SEO.metaImage&populate=hero_image&populate=List.Link');
const fetch404 = async () => await fetchData(process.env.CMS_BASE_URL+'/api/page404?populate=SEO.metaImage&populate=hero_image');
const fetchfooter = async () => await fetchData(process.env.CMS_BASE_URL+'/api/footer?populate=Lists.Link&populate=socialmedia.Link');


(async function() {
  const data = await fetchfiles()
  await writeToFile(data, './public/data/media.json')
  data.forEach(file => downloadImage(process.env.CMS_BASE_URL+file.url, './public/data/media/'+file.name))
})();

(async function() {
  const data = await fetchcategories()
  await writeToFile(data, './public/data/categories.json')
})();

(async function() {
  const data = await fetchcourses()
  await writeToFile(data, './public/data/courses.json')
})();

(async function() {
  const data = await fetchlessons()
  await writeToFile(data, './public/data/lessons.json')
})();

(async function() {
  const data = await fetchpaids()
  await writeToFile(data, './public/data/paids.json')
})();

(async function() {
  const data = await fetchlevels()
  await writeToFile(data, './public/data/levels.json')
})();

(async function() {
  const data = await fetchhome()
  await writeToFile(data, './public/data/home.json')
})();

(async function() {
  const data = await fetchabout()
  await writeToFile(data, './public/data/about.json')
})();

(async function() {
  const data = await fetchcontact()
  await writeToFile(data, './public/data/contact.json')
})();

(async function() {
  const data = await fetch404()
  await writeToFile(data, './public/data/page404.json')
})();

(async function() {
  const data = await fetchfooter()
  await writeToFile(data, './public/data/footer.json')
})();
