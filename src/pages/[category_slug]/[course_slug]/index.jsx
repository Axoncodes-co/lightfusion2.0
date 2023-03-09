
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() => import('../../../../axg-react/SectionTitle'), {ssr: false})
// const Filter = dynamic(() => import('../../../../axg-react/Filter'), {ssr: false})
const LessonBox = dynamic(() => import('../../../../components/LessonBox'), {ssr: false})
import style from './style.module.css'

export default function Archive({ category_slug, course_slug, categories }) {

	const category = categories.filter(category => category.slug == category_slug ? category : null)[0]
	const course = category.courses.filter(course => course.slug == course_slug ? course : null)[0]

	return (
        <section className={'container vertical'} style={{minHeight: '600px'}}>
			<SectionTitle
				title={course.title}
				textclasses={'font_l7 secondary_font'}
			/>
			<section className={'subcontainer horizontal topy verticalTabletBreak'}>
				{/* <Filter
					filterPrefix="filter_"
					targetId="mainitemslist"
					filterPlacement="itemplacement"
					elementId="iconsFilter"
					elements={[
						{ name: 'Level', items: [
							{ type: 'checkbox', tag: 'input', name: 'damn', label: "Damn" },
							{ type: 'checkbox', tag: 'input', name: 'beginner_friendly', label: "Beginner Friendly" },
						]},
						{ name: 'Paid', items: [
							{ type: 'checkbox', tag: 'input', name: 'free_course', label: "Free" },
							{ type: 'checkbox', tag: 'input', name: 'paid_course', label: "Paid" },
						]},
					]}
				/> */}
				<section className={'subcontainer horizontal wrap rowgap_l3 colgap_l3 center'} id={'mainitemslist'}>
					{course.lessons.map((lesson, key) => <LessonBox
						key={key}
						data={lesson}
						customclasses={`wideonLargeTablet ${style.lessonwidth}`}
						link={`/${category.slug}/${course.slug}/${lesson.slug}`}
					/>)}
				</section>
			</section>
        </section>
    )
}

export async function getStaticPaths() {
	
    // const paths = categories.map(category => ({params: {
	// 	archive: category.slug
	// }}))

	const paths = [
		{params: {category_slug: 'general', course_slug: 'course1'}},
		{params: {category_slug: 'general', course_slug: 'course2'}},
	]

	return {
      paths,
      fallback: false
    }
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug } = params

	// const category = categories.filter(category => category.slug == archive ? category : null)[0]
    
    return {
      props: {category_slug, course_slug}
    }
}