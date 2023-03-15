
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'
import fetchup from '../../lib/fetch'
import Header from '../../fragments/Header'
import Navbar from '../../fragments/Navbar'

export default function Home({categories}) {
	return (<>
		<Header />
      	<Navbar data={categories} />
		<section className={'relative'}>
			<div style={{
				filter: 'brightness(0.5)',
				background: 'url(/1.jpg) center no-repeat',
				backgroundSize: 'cover',
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}></div>
			<Hero />
			<CoursesCat categories={categories} />
		</section>
		<Posts
			link={`/${categories[0].slug}/${categories[0].courses[1].slug}`}
			title={`${categories[0].courses[1].title} Popular Lessons`}
			svg={categories[0].courses[1].svg}
		>
			{categories[0].courses[8].lessons.map((lesson, key) => key < 3 ? <LessonBox
				key={key}
				data={lesson}
				customclasses={key == 2 ? 'hideonlargetablet' : ''}
				link={`/${categories[0].slug}/${categories[0].courses[1].slug}/${lesson.slug}`}
			/> : null).filter(item => item)}
		</Posts>

		{/* TODO: Add the fun facts section */}
	</>)
}

export const getStaticProps = async () => {
	return fetchup()
	.then(categories => ({
		props: {categories}
	}))
}