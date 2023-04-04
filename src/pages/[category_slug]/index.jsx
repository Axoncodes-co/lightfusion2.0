
import fetchup from '../../../lib/fetch'
import SectionTitle from '../../../axg-react/SectionTitle'
import Filter from '../../../axg-react/Filter'
import CourseBox from '../../../components/CourseBox'
import Header from '../../../fragments/Header'
import Navbar from '../../../fragments/Navbar'
import Head from 'next/head'
import Footer from '../../../fragments/Footer'

export default function Archive({ categories, category, metatags }) {

	category.courses = category.courses.map(course => ({
		...course,
		paid: course.paid == true ? "Paid Course" : "Free Course"
	}))
	const levels = category.courses.map(course => course.level).length > 0 ? [...new Set(category.courses.map(course => course.level))] : []
	const paids = category.courses.map(course => course.paid).length > 0 ? [...new Set(category.courses.map(course => course.paid))] : []

	return (
		<>
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
			<Footer categories={categories} />
		</>
    )
}

export async function getStaticPaths() {
	return fetchup()
	.then(categories => categories.filter(cat => cat.slug != 'articles'))
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
			metatags: {
                title: `${category.metatags.title} - Online Aviation Courses and Exams By Homa Pilot`,
                description: category.metatags.description,
                href: `https://homapilot.com/${category.slug}`,
                ico: '/ico.png'
            }
		}
	})
}