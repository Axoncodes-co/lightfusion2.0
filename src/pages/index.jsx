
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'
import Header from '../../fragments/Header'
import Head from 'next/head'
import Footer from '../../fragments/Footer'
import { getCategoriesBasics } from '../../lib/fetch/category'
import { getCourseBasics, getCoursesByCategories } from '../../lib/fetch/course'
import { getLessonsBasics } from '../../lib/fetch/lesson'

export default function Home({
	categories,
	courses,
	articleCourse,
	blogCourse,
	articlelessons,
	bloglessons,
	metatags
}) {
	return (<>
		<Head>
			<title>{metatags.title}</title>
			<meta name="description" content={metatags.description} key={"description"} />
			<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
			<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
			<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
			<link rel="canonical" href={metatags.href} key={"canonical"} />
			<meta name="keywords" content={metatags.keywords}/>
			<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

			{/* icon */}
			<link rel="icon" href={metatags.ico} key={"icon"} />
			<link rel="icon" href={metatags.ico} sizes="32x32" key={"icon32"} />
			<link rel="icon" href={metatags.largeIco || metatags.ico} sizes="192x192" key={"icon192"} />
			<link rel="apple-touch-icon" href={metatags.largeIco || metatags.ico} key={"apple-touch-icon"} />
			<meta name="msapplication-TileImage" content={metatags.largeIco || metatags.ico} key={"msapplication-TileImage"} />

			{/* twitter */}
			<meta name="twitter:card" content="app" key={"twitter:card"} />
			<meta name="twitter:description" content={metatags.description} key={"twitter:description"} />
			<meta name="twitter:image" content={metatags.largeIco || metatags.ico} key={"twitter:image"} />

			{/* og */}
			<meta property="og:locale" content={metatags.locale} key={"og:locale"} />
			<meta property="og:type" content="website" key={"og:type"} />
			<meta property="og:description" content={metatags.description} key={"og:description"} />
			<meta property="og:url" content={metatags.href} key={"og:url"} />
			<meta property="og:site_name" content={metatags.title} key={"og:site_name"} />
			<meta property="og:image" content={metatags.largeIco || metatags.ico} key={"og:image"} />
			<meta property="og:image:secure_url" content={metatags.largeIco || metatags.ico} key={"og:image:secure_url"} />
			<meta property="og:image:width" content="1280" key={"og:image:width"} />
			<meta property="og:image:height" content="519" key={"og:image:height"} />
		</Head>
		<Header categories={categories} courses={courses} />
		<section className={'horizontal subcontainer verticalLargeTabletBreak spread'}>
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
			link={`/articles/`}
			title={`Articles`}
			svg={articleCourse.svg}
		>
			{articlelessons.map((lesson, key) => key < 3 ? <LessonBox
				key={key}
				thumbnail_url={`/data/media/${lesson.thumbnail_url}`}
				tags={lesson.tags}
				updateDate={lesson.updateDate}
				title={lesson.title}
				publishDate={lesson.publishDate}
				customclasses={key == 2 ? 'hideonlargetablet' : ''}
				link={lesson.href}
			/> : null).filter(item => item)}
		</Posts>

		<Posts
			link={`/blog/`}
			title={`Latest Publishments`}
			svg={articleCourse.svg}
		>
			{articlelessons.map((lesson, key) => key < 3 ? <LessonBox
				key={key}
				thumbnail_url={`/data/media/${lesson.thumbnail_url}`}
				tags={lesson.tags}
				updateDate={lesson.updateDate}
				title={lesson.title}
				publishDate={lesson.publishDate}
				customclasses={key == 2 ? 'hideonlargetablet' : ''}
				link={lesson.href}
			/> : null).filter(item => item)}
		</Posts>

		{/* TODO: Add the fun facts section */}
		<Footer categories={categories} />
	</>)
}

export const getStaticProps = async () => {
	return getCategoriesBasics()
	.then(async categories => {
		const courses = await getCoursesByCategories()

		const articleCourse = await getCourseBasics('articles')
		const blogCourse = await getCourseBasics('articles')

		const articlelessons = await getLessonsBasics('articles')
		const bloglessons = await getLessonsBasics('articles')
		
		return ({
			props: {
				categories,
				courses,
				articleCourse,
				blogCourse,
				articlelessons,
				bloglessons,
				metatags: {
					title: "Online Aviation Courses and Exams By Homa Pilot",
					description: "Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.",
					href: "https://homapilot.com/",
					ico: '/favicon.ico',
					keywords: '',
				}
			}
		})
	})
}
