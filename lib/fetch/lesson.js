import fs from "fs"
import path from "path"
import { find, metatags_schema } from "./helpers"

export const basiclesson_schema = entity => ({
    title: entity.attributes.Title,
    slug: entity.attributes.Slug,
    thumbnail_url: entity.attributes.SEO.metaImage.data.attributes.hash+entity.attributes.SEO.metaImage.data.attributes.ext,
    tags: entity.attributes.Tags || [],
    updateDate: entity.attributes.updatedAt,
    title: entity.attributes.Title,
    publishDate: entity.attributes.createdAt,
    metatags: metatags_schema(entity.attributes.SEO),
    href: entity.attributes.href,
})

export async function readLessons() {
    const jsonData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'public/data/lessons.json'), 'utf-8'))

    return jsonData.data.map(entity => {
      
      entity.attributes.href = `/${entity.attributes.course.data.attributes.category.data ? `${entity.attributes.course.data.attributes.category.data.attributes.Slug}/` : ''}${entity.attributes.course.data ? `${entity.attributes.course.data.attributes.Slug}/` : ''}${entity.attributes.Slug}/`
      if (entity.attributes.Next.data) entity.attributes.Next.data.attributes.href = `/${entity.attributes.Next.data.attributes.course.data.attributes.category.data ? `${entity.attributes.Next.data.attributes.course.data.attributes.category.data.attributes.Slug}/` : ''}${entity.attributes.Next.data.attributes.course.data ? `${entity.attributes.Next.data.attributes.course.data.attributes.Slug}/` : ''}${entity.attributes.Next.data.attributes.Slug}/`
      if (entity.attributes.Previous.data) entity.attributes.Previous.data.attributes.href = `/${entity.attributes.Previous.data.attributes.course.data.attributes.category.data ? `${entity.attributes.Previous.data.attributes.course.data.attributes.category.data.attributes.Slug}/` : ''}${entity.attributes.Previous.data.attributes.course.data ? `${entity.attributes.Previous.data.attributes.course.data.attributes.Slug}/` : ''}${entity.attributes.Previous.data.attributes.Slug}/`
      return entity
  })
}

export const lessons_count = async (cat_slug) => {
    return readLessons()
    .then(alllessons => alllessons.map(({attributes}) => attributes.course.data).filter(({attributes}) => attributes.Slug == cat_slug).length)
}
export async function getLessons(course_slug) {
    return readLessons()
    .then(lessons => lessons.filter(lesson => lesson.attributes.course.data.attributes.Slug == course_slug))
}

export async function getLesson(lesson_slug) {
    return readLessons()
    .then(lessons => find(lessons, lesson_slug))
    .then(lesson => {
      // extract imageslist
      const regex = /!\[.*?\]\((.*?)\)/g;
      let match;
      const imageslist = [];

      while (match = regex.exec(lesson.attributes.Content)) {
          const imageUrl = match[1].replace('upload/', '/data/media/');
          imageslist.push(imageUrl);
      }


      function convertHtmlToString(html) {
          const imgRegex = /!\[(.+?)\]\((.+?)\)/g
          const linkRegex = /\[(.+?)\]\((.+?)\)/g
          const imgsrcRegex = /uploads\//g
          const textinliRegex = /(<li>)(.*)(<\/li>)/g
          const removeextraliRexex = /(<li>)(\s*)(.*)/g

          // Add <p> tags to lines that don't have HTML tags
          function formatContent(content) {
              const lines = content.split("\n");
              let result = "";
            
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
            
                if (line.startsWith("<ul>")) {
                  result += "<ul>";
                  continue;
                }
            
                if (line.startsWith("</ul>")) {
                  result += "</ul>";
                  continue;
                }
            
                if (line.startsWith("<li>")) {
                  let text = line.replace("<li>", "").trim();
                  if (text.startsWith("<strong>")) {
                    text = `<p>${text}</p>`;
                  }
                  result += `\n\t<li>${text}</li>`;
                  continue;
                }
            
                if (line.startsWith("<p></p>")) {
                  continue;
                }
            
                if (line.startsWith("<p>") || line.endsWith("</p>")) {
                  result += `${line}`;
                  continue;
                }
            
                if (line !== "") {
                  result += `\n<p>${line}</p>`;
                }
              }
            
              return result
          }
          
          return formatContent(html)
            .replace(imgRegex, '<img alt="$1" src="$2" />')
            .replace(imgsrcRegex, 'data/media/')
            .replace(linkRegex, '<a href="$2" title="$1" rel="noopener" target="_blank">$1</a>')
            .replace(removeextraliRexex, '<li>$3')
            .replace(textinliRegex, '$1<p>$2</p>$3')
        
      }
      const content = convertHtmlToString(lesson.attributes.Content);
      
      lesson.attributes.Content = content
      return ({...lesson, imageslist})
  })
}

export async function getLessonsBasics(course_slug) {
    return getLessons(course_slug)
    .then(async lessons => !lessons ? [] : await Promise.all(lessons.map(basiclesson_schema)))
}

export async function getAllLessonsBasics() {
    return readLessons()
    .then(lessons => lessons.map(lesson => ({
        category_slug: lesson.attributes.course.data.attributes.category.data ? lesson.attributes.course.data.attributes.category.data.attributes.Slug : 'null',
        course_slug: lesson.attributes.course.data.attributes.Slug,
        lesson_slug: lesson.attributes.Slug,
        ...basiclesson_schema(lesson)
    })))
}
