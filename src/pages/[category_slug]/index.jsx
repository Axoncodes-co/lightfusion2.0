
import dynamic from 'next/dynamic'
const SectionTitle = dynamic(() => import('../../../axg-react/SectionTitle'), {ssr: false})
const Filter = dynamic(() => import('../../../axg-react/Filter'), {ssr: false})
const CourseBox = dynamic(() => import('../../../components/CourseBox'), {ssr: false})

export default function Archive({ category_slug, categories }) {

	const category = categories.filter(category => category.slug == category_slug ? category : null)[0]
	
	return (
        <section className={'container vertical'} style={{minHeight: '600px'}}>
			<SectionTitle
				title={category.title}
				textclasses={'font_l7 nomargin gloock'}
			/>
			<section className={'subcontainer horizontal topy verticalTabletBreak'}>
				<Filter
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
				/>
				<section className={'subcontainer wrap rowgap_l3 colgap_l1 center'} id={'mainitemslist'}>
					{category.courses.map((course, key) => <CourseBox
						key={key}
						svg={course.svg}
						title={course.title}
						paid={course.paid}
						level={course.level}
						description={course.description}
						link={`/${category.slug}/${course.slug}`}
						lessons_count={course.lessons_count}
						lessons={course.lessons}
						hours={course.hours}
						courseAttitude={course.courseAttitude}
						customclasses={`filter_${course.level.replaceAll(' ', '_').toLowerCase()} filter_${course.paid.replaceAll(' ', '_').toLowerCase()} itemplacement`}
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
		{params: {category_slug: 'general'}},
		{params: {category_slug: 'atpl'}},
		{params: {category_slug: 'diy'}},
	]

	return {
      paths,
      fallback: false
    }
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug } = params

	// const category = categories.filter(category => category.slug == archive ? category : null)[0]
    
    return {
      props: {category_slug}
    }
}