
import SectionTitle from '../../../../axg-react/SectionTitle'
import LessonBox from '../../../../components/LessonBox'
import style from './course.module.css'
import Header from '../../../../fragments/Header'
import Navbar from '../../../../fragments/Navbar'
import Breadcrumb from '../../../../components/Breadcrumb'
import Head from 'next/head'
import Footer from '../../../../fragments/Footer'
import { getAllCoursesBasics, getCourse, getCoursesByCategories } from '../../../../lib/fetch/course'
import { getCategoriesBasics, getCategoryBasics } from '../../../../lib/fetch/category'
import { getLessonsBasics } from '../../../../lib/fetch/lesson'

export default function Archive({ category_slug, courseslist, category, courses, lessons, course_slug, course, categories, metatags }) {
	return (
		<>
			<Head>
				<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
                <title>{course.attributes.SEO.metaTitle}</title>
                <meta name="description" content={course.attributes.SEO.metaDescription} key={"description"} />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
                <link rel="canonical" href={metatags.href} key={"canonical"} />
				<meta name="keywords" content={course.attributes.SEO.keywords}/>
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
			<Navbar categories={categories} courses={courses} current_slug={course_slug} />
			<section className={'container vertical primary_bg'} style={{minHeight: '600px'}}>
				<Breadcrumb
					categories={categories}
					courses={courseslist}
					category={category}
					course={course}
				/>
				<SectionTitle
					title={`Course: ${course.attributes.Title}`}
					textclasses={'weight_l3 font_l7 secondary_font secondary_color'}
				/>
				<section className={'subcontainer horizontal topy verticalTabletBreak'}>
					<section className={'subcontainer horizontal wrap rowgap_l3 colgap_l3 center'} id={'mainitemslist'}>
						{lessons.map((lesson, key) => <LessonBox
							key={key}
							thumbnail_url={`/data/media/${lesson.thumbnail_url}`}
							tags={lesson.tags}
							updateDate={lesson.updateDate}
							title={lesson.title}
							publishDate={lesson.publishDate}
							customclasses={`wideonLargeTablet ${style.lessonwidth}`}
							link={lesson.href}
						/>)}
					</section>
				</section>
			</section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Course",
					"name": metatags.title,
					"description": metatags.description,
					"provider": {
						"@type": "Organization",
						"name": "Homa Pilot",
					}
				})
				}}
			/>
			<Footer categories={categories} />
		</>
    )
}

export async function getStaticPaths() {
	return getAllCoursesBasics()
	.then(courses => courses.filter(({course_slug}) => course_slug != 'articles')
	.map(({ category_slug, course_slug }) => ({
		params: { category_slug, course_slug }})
	))
	.then(paths => ({ paths, fallback: false }))
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug } = params
	const categories = await getCategoriesBasics()
	const courses = await getCoursesByCategories()
	const category = await getCategoryBasics(category_slug)
	const course = await getCourse(course_slug)
	const lessons = await getLessonsBasics(course_slug)
	const courseslist = await getAllCoursesBasics()

	return ({
		props: {
			course,
			category,
			category_slug,
			course_slug,
			categories,
			courses,
			courseslist,
			lessons,
			metatags: {
                href: `https://homapilot.com/${category_slug}/${course_slug}/`,
                ico: '/favicon.ico'
            }
		}
	})
}