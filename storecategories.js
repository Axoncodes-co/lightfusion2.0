
const fs = require('fs')

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 9a0da8bf89da11a2f159d8e452e110965f2faf24c69f10b282dec0089a5ae55a8597d8885857b4c8c8626918b91961d4de596060a73a8f5e9a2e4149df5c59315fe594057c1d6f912f8ed95d77645724c7acd57fdcaf41040ad6a60048cb9e150bcc86ea2ef410ba1a9ce98ede47f99646d76798094b4a8768ad89bdbfc0fe0e");

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
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
}

async function writeToFile(data, address) {
  try {
    // await storeimages(JSON.parse(data))
    // .then(modifiedData => fs.promises.writeFile(address, modifiedData))
    fs.promises.writeFile(address, JSON.stringify(data))
    console.log('Data written to file successfully!')
  } catch (err) {
    console.error('Error writing data to file:', err)
  }
}

// (async function() {
//   const data = await fetchData('https://blog.homapilot.com/api')
//   await writeToFile(JSON.stringify(data), './public/data/categories.json')
// })();

// (async function() {
//   const data = await fetchData('https://blog.homapilot.com/api-media')
//   data.forEach(item => {
  //     console.log(item.url);
//     downloadImage(item.url, `./public/data/media/${item.url.slice(item.url.lastIndexOf('/')+1)}`)
//   })
//   fs.writeFileSync('./public/data/media/info.json', JSON.stringify(data))
// })();



(async function() {
  const data = await fetchData('http://localhost:1337/api/category-configs?populate=SEO.metaImage')
  await writeToFile(data, './public/data/categories.json')
})();

(async function() {
  const data = await fetchData('http://localhost:1337/api/courses?populate=SEO.metaImage&populate=category&populate=category.SEO.metaImage')
  await writeToFile(data, './public/data/courses.json')
})();

(async function() {
  const data = await fetchData('http://localhost:1337/api/lessons?populate=course.category.SEO&populate=course.SEO&populate=SEO&populate=users_permissions_user&populate=SEO.metaImage')
  await writeToFile(data, './public/data/lessons.json')
})();