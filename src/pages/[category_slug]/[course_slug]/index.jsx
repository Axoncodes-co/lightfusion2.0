
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() => import('../../../../axg-react/SectionTitle'), {ssr: false})
const LessonBox = dynamic(() => import('../../../../components/LessonBox'), {ssr: false})
import style from './course.module.css'
import fetchup from '../../../../lib/fetch'
import Header from '../../../../fragments/Header'
import Navbar from '../../../../fragments/Navbar'
import Breadcrumb from '../../../../components/Breadcrumb'
const Axg = dynamic(() => import('../../../../axg-react/Run'), {ssr: false})
import Head from 'next/head'
import MetaTags from '../../../../axg-react/MetaTags'

export default function Archive({ category_slug, category, course_slug, course, categories }) {
	return (
		<>
			<Head>
				<title>{course.title} - Online Aviation Courses and Exams By Homa Pilot</title>
				<MetaTags
					title={course.title}
					description={course.description}
					href={`https://homapilot.com/${category.slug}/${course.slug}`}
					ico={'/ico.png'}
				/>
			</Head>
			<Header categories={categories} />
			<Navbar data={categories} current_slug={course_slug} />
			<section className={'container vertical primary_bg'} style={{minHeight: '600px'}}>
				<Breadcrumb
					categories={categories}
					category={category}
					course={course}
				/>
				<SectionTitle
					title={`Course: ${course.title}`}
					textclasses={'weight_l3 font_l7 secondary_font secondary_color'}
				/>
				<section className={'subcontainer horizontal topy verticalTabletBreak'}>
					<section className={'subcontainer horizontal wrap rowgap_l3 colgap_l3 center'} id={'mainitemslist'}>
						{course.lessons.map((lesson, key) => <LessonBox
							key={key}
							data={lesson}
							customclasses={`wideonLargeTablet ${style.lessonwidth}`}
							link={`/${category_slug}/${course.slug}/${lesson.slug}`}
						/>)}
					</section>
				</section>
			</section>
			<Axg />
		</>
    )
}

export async function getStaticPaths() {
	return fetchup()
	.then(categories => categories
		.map(category => category.courses
			.map(course => ({
				params: {
					category_slug: category.slug,
					course_slug: course.slug
				}
			}))
		)
	)
	.then(paths => ({
		paths: paths.flat(),
		fallback: false
	}))
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug } = params
	const categories = await fetchup()
	const category = categories.filter(category => category.slug == category_slug)[0]
	const course = category.courses.filter(course => course.slug == course_slug)[0]

	return ({
		props: {
			course,
			category,
			category_slug,
			course_slug,
			categories
		}
	})
}