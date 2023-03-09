import dynamic from 'next/dynamic'

const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})

export default function Post({ category_slug, course_slug, lesson_slug, categories }) {

    const category = categories.filter(category => category.slug == category_slug ? category : null)[0]
	const course = category.courses.filter(course => course.slug == course_slug ? course : null)[0]
	const lesson = course.lessons.filter(lesson => lesson.slug == lesson_slug ? lesson : null)[0]

    return (
        <SectionTitle
            title={lesson.title}
            textclasses={'font_l7 nomargin secondary_font'}
        />
    )
}

export async function getStaticPaths() {
	
    // const paths = categories.map(category => ({params: {
	// 	archive: category.slug
	// }}))

	const paths = [
		{params: {category_slug: 'general', course_slug: 'course2', lesson_slug: 'lesson1'}},
		{params: {category_slug: 'general', course_slug: 'course2', lesson_slug: 'lesson2'}},
	]

	return {
      paths,
      fallback: false
    }
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug, lesson_slug } = params

	// const category = categories.filter(category => category.slug == archive ? category : null)[0]
    
    return {
      props: {category_slug, course_slug, lesson_slug}
    }
}