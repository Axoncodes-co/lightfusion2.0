
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() => import('../../../../axg-react/SectionTitle'), {ssr: false})
const LessonBox = dynamic(() => import('../../../../components/LessonBox'), {ssr: false})
import style from './style.module.css'
import fetchup from '../../../../lib/fetch'

export default function Archive({ category_slug, course }) {
	return (
        <section className={'container vertical'} style={{minHeight: '600px'}}>
			<SectionTitle
				title={course.title}
				textclasses={'font_l7 secondary_font'}
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
	return fetchup()
	.then(categories => categories.filter(category => category.slug == category_slug)[0])
	.then(category => category.courses.filter(course => course.slug == course_slug)[0])
	.then(course => ({
		props: {
			course,
			category_slug
		}
	}))
}