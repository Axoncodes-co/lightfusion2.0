
import SectionTitle from '../../../axg-react/SectionTitle'
import Filter from '../../../axg-react/Filter'
import CourseBox from '../../../components/CourseBox'
import Header from '../../../fragments/Header'
import Navbar from '../../../fragments/Navbar'
import Head from 'next/head'
import Footer from '../../../fragments/Footer'
import { getCategoriesBasics, getCategory } from '../../../lib/fetch/category'
import { getCoursesBasics, getCoursesByCategories } from '../../../lib/fetch/course'
import { readLevels } from '../../../lib/fetch/level'
import { readPaids } from '../../../lib/fetch/paid'
import { readFooter } from '../../../lib/fetch/footer'

export default function Archive({ footerData, category_slug, levels, paids, categories, category, courses, metatags, categoryCourses }) {
	return (
		<>
			<Head>
                <title>{category.attributes.SEO.metaTitle}</title>
                <meta name="description" content={category.attributes.SEO.metaDescription} key={"description"} />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
                <link rel="canonical" href={metatags.href} key={"canonical"} />
				<meta name="keywords" content={category.attributes.SEO.keywords}/>
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
			<Navbar categories={categories} courses={courses} />
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
							{
								textclasses: 'secondary_color',
								customclasses: 'fitHeight',
								name: 'Level',
								items: levels.map(level => ({
									inputColor:'var(--secondaryTextColor)',
									type: 'checkbox',
									tag: 'input',
									name: level.attributes.Slug,
									label: level.attributes.Title
								}))
							},
							{
								textclasses: 'secondary_color',
								customclasses: 'fitHeight',
								name: 'Paid',
								items: paids.map(paid => ({
									inputColor:'var(--secondaryTextColor)',
									type: 'checkbox',
									tag: 'input',
									name: paid.attributes.Slug,
									label: paid.attributes.Title
								}))
							},
						]}
					/>
					<section className={'subcontainer wrap rowgap_l3 colgap_l1 center topy'} id={'mainitemslist'}>
						{categoryCourses.map((course, key) => <CourseBox
							key={key}
							svg={course.svg}
							title={course.title}
							paid={course.paid.data.attributes.Title}
							level={course.level.data.attributes.Title}
							description={course.description}
							link={course.href}
							lessons_count={course.lessons_count}
							customclasses={`filter_${course.level.data.attributes.Slug} filter_${course.paid.data.attributes.Slug} itemplacement`}
						/>)}
					</section>
				</section>
			</section>
			{process.env.ALLOW_CATEGORY_GOOGLE_ENHANCEMENTS?.toLocaleLowerCase == "true" ? <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context":"https://schema.org",
						"@type":"ItemList",
						"itemListElement": categoryCourses.map((course, key) => ({
							"@type":"ListItem",
							"position":key,
							"url":`${process.env.DOMAIN}/${category_slug}/${course.slug}`
						}))
					})
				}}
			/> : ''}
			<Footer footerData={footerData} categories={categories} />
		</>
    )
}

export async function getStaticPaths() {
	return getCategoriesBasics()
	.then(categories => categories.map(category => ({params: {category_slug: category.slug}})))
	.then(paths => ({ paths, fallback: false }))
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug } = params
	const categories = await getCategoriesBasics()
	const {courses:categoryCourses} = await getCoursesBasics(category_slug)
	const category = await getCategory(category_slug)
	const courses = await getCoursesByCategories()
	const levels = await readLevels()
	const paids = await readPaids()
	const footerData = await readFooter()
	return ({
		props: {
			categories,
			category,
			courses,
			categoryCourses,
			paids,
			levels,
			category_slug,
			footerData,
			metatags: {
                href: `${process.env.DOMAIN}/${category_slug}/`,
                ico: '/favicon.ico'
            }
		}
	})
}