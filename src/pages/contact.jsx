
import Header from '../../fragments/Header'
import Head from 'next/head'
import Footer from '../../fragments/Footer'
import Text from '../../builtin-axg/text/v2'
import { getCategoriesBasics } from '../../lib/fetch/category'
import { readContact } from '../../lib/fetch/contact'
import { getCoursesByCategories } from '../../lib/fetch/course'

export default function Contact({categories, courses, pageData, metatags}) {

    return (<>
		<Head>
			<title>{pageData.attributes.SEO.metaTitle}</title>
			<meta name="description" content={pageData.attributes.SEO.metaDescription} key={"description"} />
			<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
			<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
			<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
			<link rel="canonical" href={metatags.href} key={"canonical"} />
			<meta name="keywords" content={pageData.attributes.SEO.keywords}/>
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
		<section className={'subcontainer'}>
			<div style={{
				filter: 'brightness(0.5)',
				background: `url(/data/media/${pageData.attributes.hero_image.data[0].attributes.name}) center no-repeat`,
				backgroundSize: 'cover',
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}></div>
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={pageData.attributes.hero_title} />
		</section>
		<section className={'primary_bg container horizontal topy spread verticalTabletBreak'} style={{minHeight: '350px'}}>
			{pageData.attributes.List.map((list, key) => (
				<div key={key} className={'subcontainer wide centerOnTablet'}>
					<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={list.List_Title} />
					{list.Link.map((link, linkkey) => (
						<Text key={linkkey} customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={link.Link} text={link.Name} />
					))}
				</div>
			))}
			{/* <div className={'subcontainer wide centerOnTablet'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact Homa Pilot'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:info@homapilot.com'} text={'info@homapilot.com'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:homapilot@gmail.com'} text={'homapilot@gmail.com'} />
			</div>
			<div className={'subcontainer wide'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact the support team'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:support@homapilot.com'} text={'support@homapilot.com'} />
			</div>
			<div className={'subcontainer wide'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact the advertising department'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:ad@homapilot.com'} text={'ad@homapilot.com'} />
			</div> */}
		</section>
		<Footer categories={categories} />
		{/* <Script src={"/axgjs/dropdown_v5.js"} strategy={'lazyOnload'}></Script> */}

    </>)
}

export const getStaticProps = async () => {
	const categories = await getCategoriesBasics()
	const courses = await getCoursesByCategories()
	const pageData = await readContact()
	return ({
		props: {
			categories,
			courses,
			pageData,
			metatags: {
				href: "https://homapilot.com/contact/",
				ico: '/favicon.ico'
			}
		}
	})
}