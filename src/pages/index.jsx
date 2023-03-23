
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'
import fetchup from '../../lib/fetch'
import Header from '../../fragments/Header'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import MetaTags from '../../axg-react/MetaTags'
import Footer from '../../fragments/Footer'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function Home({categories}) {
	return (<>
		<Head>
			<title>Online Aviation Courses and Exams By Homa Pilot</title>
			<MetaTags
				title={'Online Aviation Courses and Exams By Homa Pilot'}
				description={'Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.'}
				href={'https://homapilot.com/'}
				ico={'/ico.png'}
				/>
		</Head>
		<Header categories={categories} />
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
			link={`/${categories[0].slug}/${categories[0].courses[0].slug}`}
			title={`${categories[0].courses[0].title} Popular Lessons`}
			svg={categories[0].courses[0].svg}
		>
			{categories[0].courses[0].lessons.map((lesson, key) => key < 3 ? <LessonBox
				key={key}
				data={lesson}
				customclasses={key == 2 ? 'hideonlargetablet' : ''}
				link={`/${categories[0].slug}/${categories[0].courses[0].slug}/${lesson.slug}`}
			/> : null).filter(item => item)}
		</Posts>

		{/* TODO: Add the fun facts section */}
		<Footer categories={categories} />
		<Axg />
	</>)
}

export const getStaticProps = async () => {
	return fetchup()
	.then(categories => ({
		props: {categories}
	}))
}