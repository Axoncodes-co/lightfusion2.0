
import Header from '../../fragments/Header'
import Head from 'next/head'
import fetchup from '../../lib/fetch'
import Footer from '../../fragments/Footer'
import Text from '../../builtin-axg/text/v2'

export default function About({categories, metatags}) {
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
        <Header categories={categories} />
		<section className={'subcontainer'}>
			<div style={{
				filter: 'brightness(0.5)',
				background: 'url(/1.jpg) center no-repeat',
				backgroundSize: 'cover',
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}></div>
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={'About Homa Pilot'} />
		</section>
		<section className={'primary_bg container vertical verticalTabletBreak'} style={{minHeight: '350px'}}>
			<Text textclasses={'secondary_color font_l4 weight_l3'} text={'Homa Pilot Complex was founded in 2020 by pilot Benyamin Amiri. The purpose of this complex is to provide aviation and piloting courses that are available online for free to pilot students and all those who are interested in this industry.'} />
			<Text textclasses={'secondary_color font_l4 weight_l3'} text={'At <a href="/">Homa Pilot</a>, an attempt has been made to provide all courses with a high level of educational standard, which will lead to better student learning. In addition, there is an exam at the end of each course for the students to assess what they have learned.'} />
		</section>
		<Footer categories={categories} />
    </>)
}

export const getStaticProps = async () => {
	return fetchup()
	.then(categories => ({
		props: {
			categories,
			metatags: {
				title: "About - Online Aviation Courses and Exams By Homa Pilot",
				description: "Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.",
				href: "https://homapilot.com/about/",
                ico: '/ico.png'
			}
		}
	}))
}