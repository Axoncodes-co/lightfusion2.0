
const fs = require('fs')

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
          
          // let htmlString = lesson.content;
          // let parser = new DOMParser();
          // let doc = parser.parseFromString(htmlString, 'text/html');
          // let images = doc.querySelectorAll('img');
          // images.forEach(img => {
          //   let src = img.getAttribute('src');
          //   src = src.replace('blog.', '');
          //   src = src.replace(/uploads\/\d{4}\/\d{2}\//, '');
          //   img.setAttribute('src', src);
          // });
          // modified_lesson = ({
          //   ...modified_lesson,
          //   content: doc.body.innerHTML
          // })

          return modified_lesson
        })
      }))
    }))
  )
}

async function fetchData(url) {
  const response = await fetch(url, {
    method: 'GET',
    timeout: 100000
  });
  const data = await response.json();
  return data;
}

async function writeToFile(data, address) {
  try {
    await storeimages(data)
    .then(modifiedData => fs.promises.writeFile(address, JSON.stringify(modifiedData)))
    console.log('Data written to file successfully!')
  } catch (err) {
    console.error('Error writing data to file:', err)
  }
}

(async function() {
  const data = await fetchData('https://blog.homapilot.com/api')
  await writeToFile(data, './public/data/categories.json')
})();

// (async function() {
//   const data = await fetchData('https://blog.homapilot.com/api-media')
//   data.forEach(item => {
//     console.log(item.url);
//     downloadImage(item.url, `./public/data/media/${item.url.slice(item.url.lastIndexOf('/')+1)}`)
//   })
//   fs.writeFileSync('./public/data/media/info.json', JSON.stringify(data))
// })();