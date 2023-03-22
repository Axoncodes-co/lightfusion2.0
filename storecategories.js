
const fs = require('fs')

async function downloadImage(imageUrl, imagePath) {
  return fetch(imageUrl)
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
          if (lesson.thumbnail_url) {
            downloadImage(lesson.thumbnail_url, `./public/data/media/${lesson.thumbnail_url.slice(lesson.thumbnail_url.lastIndexOf('/')+1)}`)
            return ({
              ...lesson,
              original_thumbnail_url: lesson.thumbnail_url,
              thumbnail_url: `/data/media/${lesson.thumbnail_url.slice(lesson.thumbnail_url.lastIndexOf('/')+1)}`
            })
          } return lesson
        })
      }))
    }))
  )
}

async function fetchData() {
  const response = await fetch('https://blog.homapilot.com/api');
  const data = await response.json();
  return data;
}

async function writeToFile(data) {
  try {
    await storeimages(data)
    .then(modifiedData => fs.promises.writeFile('./public/data/categories.json', JSON.stringify(modifiedData)))
    console.log('Data written to file successfully!')
  } catch (err) {
    console.error('Error writing data to file:', err)
  }
}

(async function() {
  const data = await fetchData();
  await writeToFile(data);
})();