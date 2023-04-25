
const fs = require('fs')

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 18b93ddbd65129e43ae32bd82fde679f73f3d8b358047ca44a7fcf7bd1263cf6b6284e6370fe76900a7de8dea4181a43977bce3c53732d5924be3cb6b012ad223851e44f38cec48e815e7b1053ebe163db212c69315b08a6b42db6561e0657ac1427ebd3dd064e0eeaef77276e9054e54cdb91fb88ed4eb893f2620632422fbf");

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

const baseurl = 'http://localhost:1337';

(async function() {
  const data = await fetchData(baseurl+'/api/upload/files')
  await writeToFile(data, './public/data/media.json')
  data.forEach(file => downloadImage(baseurl+file.url, './public/data/media/'+file.hash+file.ext))
})();

(async function() {
  const data = await fetchData(baseurl+'/api/category-configs?populate=SEO.metaImage')
  await writeToFile(data, './public/data/categories.json')
})();

(async function() {
  const data = await fetchData(baseurl+'/api/courses?populate=SEO.metaImage&populate=category&populate=category.SEO.metaImage&populate=level,paid')
  await writeToFile(data, './public/data/courses.json')
})();

(async function() {
  const data = await fetchData(baseurl+'/api/lessons?populate=course.category.SEO&populate=course.SEO&populate=SEO&populate=users_permissions_user&populate=SEO.metaImage&populate=Previous,Next&populate=users_permissions_user.Avatar')
  await writeToFile(data, './public/data/lessons.json')
})();

(async function() {
  const data = await fetchData(baseurl+'/api/paids')
  await writeToFile(data, './public/data/paids.json')
})();

(async function() {
  const data = await fetchData(baseurl+'/api/levels')
  await writeToFile(data, './public/data/levels.json')
})();