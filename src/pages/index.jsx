
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'

export default function Home({categories}) {

  return (<>
	<Hero />
	<CoursesCat categories={categories} />
	<Posts
		link={`/${categories[0].slug}/${categories[0].courses[1].slug}`}
		title={`${categories[0].courses[1].title} Popular Lessons`}
		svg={categories[0].courses[1].svg}
	>
		{categories[0].courses[1].lessons.map((lesson, key) => key < 3 ? <LessonBox
			key={key}
			data={lesson}
			link={`/${categories[0].slug}/${categories[0].courses[1].slug}/${lesson.slug}`}
		/> : null).filter(item => item)}
	</Posts>

	{/* TODO: Add the fun facts section */}
  </>)
}
