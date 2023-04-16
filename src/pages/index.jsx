
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'
import { getCategoriesBasic, getCategoryCoursesBasic, getCourseLessonsBasic } from '../../lib/fetch'
import Header from '../../fragments/Header'
import Head from 'next/head'
import Footer from '../../fragments/Footer'

export default function Home({categories, courses, lessons1, metatags}) {
	return (<>
		<Head>
			<title>{metatags.title}</title>
			<meta name="description" content={metatags.description} key={"description"} />
			<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
			<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
			<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
			<link rel="canonical" href={metatags.href} key={"canonical"} />
					
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
			link={`/${categories[0].slug}/${courses[categories[0].slug][0].slug}`}
			title={`${courses[categories[0].slug][0].title} Popular Lessons`}
			svg={courses[categories[0].slug][0].svg}
		>
			{lessons1.map((lesson, key) => key < 3 ? <LessonBox
				key={key}
				thumbnail_url={lesson.thumbnail_url}
				tags={lesson.tags}
				updateDate={lesson.updateDate}
				title={lesson.title}
				publishDate={lesson.publishDate}
				customclasses={key == 2 ? 'hideonlargetablet' : ''}
				link={`/${categories[0].slug}/${courses[categories[0].slug][0].slug}/${lesson.slug}`}
			/> : null).filter(item => item)}
		</Posts>

		{/* TODO: Add the fun facts section */}
		{/* <Footer categories={categories} /> */}
		{/* <Script async src={"/axgjs/dropdown_v5.js"} strategy={'afterInteractive'}></Script> */}

	</>)
}

export const getStaticProps = async () => {
	return getCategoriesBasic()
	.then(async categories => {
		const categorieslist = {}
		await Promise.all(categories.map(async ({slug}) => categorieslist[slug] = await getCategoryCoursesBasic(slug)))
		return ({
			props: {
				categories,
				courses: categorieslist,
				lessons1: await getCourseLessonsBasic(categorieslist[categories[0].slug][1].slug),
				metatags: {
					title: "Online Aviation Courses and Exams By Homa Pilot",
					description: "Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.",
					href: "https://homapilot.com/",
					ico: '/favicon.ico'
				}
			}
		})
	})
}