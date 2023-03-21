
import dynamic from 'next/dynamic'
import fetchup from '../../../lib/fetch'
const SectionTitle = dynamic(() => import('../../../axg-react/SectionTitle'), {ssr: false})
const Filter = dynamic(() => import('../../../axg-react/Filter'), {ssr: false})
const CourseBox = dynamic(() => import('../../../components/CourseBox'), {ssr: false})
import Header from '../../../fragments/Header'
import Navbar from '../../../fragments/Navbar'
const Axg = dynamic(() => import('../../../axg-react/Run'), {ssr: false})

export default function Archive({ categories, category }) {

	category.courses = category.courses.map(course => ({
		...course,
		paid: course.paid == true ? "Paid Course" : "Free Course"
	}))
	const levels = category.courses.map(course => course.level).length > 0 ? [...new Set(category.courses.map(course => course.level))] : []
	const paids = category.courses.map(course => course.paid).length > 0 ? [...new Set(category.courses.map(course => course.paid))] : []

	return (
		<>
			<Header categories={categories} />
			<Navbar data={categories} />
			<section className={'primary_bg container vertical'} style={{minHeight: '600px'}}>
				<SectionTitle
					title={category.title}
					textclasses={'font_l7 weight_l3 nomargin secondary_color secondary_font'}
				/>
				<section className={'subcontainer horizontal topy verticalTabletBreak'}>
					<Filter
						filterPrefix="filter_"
						targetId="mainitemslist"
						filterPlacement="itemplacement"
						elementId="iconsFilter"
						elements={[
							{ textclasses: 'secondary_color', customclasses: 'fitHeight', name: 'Level', items: levels.map(level => ({ inputColor:'var(--secondaryTextColor)', type: 'checkbox', tag: 'input', name: level.toLowerCase().replaceAll(' ', '_'), label: level }))},
							{ textclasses: 'secondary_color', customclasses: 'fitHeight', name: 'Paid', items: paids.map(paid => ({ inputColor:'var(--secondaryTextColor)', type: 'checkbox', tag: 'input', name: paid.toLowerCase().replaceAll(' ', '_'), label: paid }))},
						]}
					/>
					<section className={'subcontainer wrap rowgap_l3 colgap_l1 center topy'} id={'mainitemslist'}>
						{category.courses.map((course, key) => <CourseBox
							key={key}
							svg={course.svg}
							title={course.title}
							paid={course.paid}
							level={course.level}
							description={course.description}
							link={`/${category.slug}/${course.slug}`}
							lessons_count={course.lessons_count}
							courseAttitude={course.courseAttitude}
							// customclasses={`filter_${course.level.replaceAll(' ', '_').toLowerCase()} filter_${course.paid.replaceAll(' ', '_').toLowerCase()} itemplacement`}
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
	.then(categories => categories.map(category => ({
		params: {category_slug: category.slug}
	})))
	.then(paths => ({
		paths,
		fallback: false
	}))
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug } = params
	const categories = await fetchup()
	const category = categories.filter(category => category.slug == category_slug)[0]
	return ({
		props: {
			categories,
			category,
		}
	})
}