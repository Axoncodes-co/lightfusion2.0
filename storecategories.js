
const fs = require('fs')

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.CMS_TOKEN}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  timeout: 100000
};

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

export const fetchlessons = async () => await fetchData(process.env.CMS_BASE_URL+'/api/lessons?populate=course.category.SEO&populate=course.SEO&populate=SEO&populate=users_permissions_user&populate=SEO.metaImage&populate=Previous,Next&populate=users_permissions_user.Avatar&populate=Previous.course.category,Next.course.category')
export const fetchcourses = async () => await fetchData(process.env.CMS_BASE_URL+'/api/courses?populate=SEO.metaImage&populate=category&populate=category.SEO.metaImage&populate=level,paid')
export const fetchcategories = async () => await fetchData(process.env.CMS_BASE_URL+'/api/category-configs?populate=SEO.metaImage')
export const fetchpaids = async () => await fetchData(process.env.CMS_BASE_URL+'/api/paids')
export const fetchlevels = async () => await fetchData(process.env.CMS_BASE_URL+'/api/levels')
export const fetchfiles = async () => await fetchData(process.env.CMS_BASE_URL+'/api/upload/files')

// (async function() {
//   const data = await fetchfiles()
//   await writeToFile(data, './public/data/media.json')
//   data.forEach(file => downloadImage(baseurl+file.url, './public/data/media/'+file.name))
// })();

// (async function() {
//   const data = await fetchcategories()
//   await writeToFile(data, './public/data/categories.json')
// })();

// (async function() {
//   const data = await fetchcourses()
//   await writeToFile(data, './public/data/courses.json')
// })();

// (async function() {
//   const data = await fetchlessons()
//   await writeToFile(data, './public/data/lessons.json')
// })();

// (async function() {
//   const data = await fetchpaids()
//   await writeToFile(data, './public/data/paids.json')
// })();

// (async function() {
//   const data = await fetchlevels()
//   await writeToFile(data, './public/data/levels.json')
// })();
