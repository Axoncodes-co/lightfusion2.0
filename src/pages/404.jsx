
import Header from '../../fragments/Header'
import Head from 'next/head'
import fetchup from '../../lib/fetch'
import Footer from '../../fragments/Footer'
import Text from '../../builtin-axg/text/v2'

export default function Notfound({categories, metatags}) {
    const headsclasses = 'secondary_color font_l2_min weight_l6 fitWidth'
    const itemsclasses = 'secondary_color font_l2_max nomargin weight_l4 fitWidth tertiary_color_hover'

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
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={'404'} />
		</section>
		<section className={'primary_bg container vertical verticalTabletBreak'} style={{minHeight: '300px'}}>
			<Text customclasses={'center'} textclasses={'textcenter secondary_color font_l6 weight_l3 secondary_font'} text={'Looks like you are lost, you can go back or hump to <a href="/">Home</a> page or choose from the list below'} />
            <section className={'subcontainer horizontal topy center'}>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Categories'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        {categories.map((category, key) => <Text key={key} text={category.title} link={`/${category.slug}`} textclasses={itemsclasses} />)}
                    </div>
                </section>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Main Sectors'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        <Text text={'Home'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Contact'} link={'/contact'} textclasses={itemsclasses} />
                        <Text text={'About'} link={'/about'} textclasses={itemsclasses} />
                    </div>
                </section>
            </section>
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
				title: "404 - Online Aviation Courses and Exams By Homa Pilot",
				description: "Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.",
				href: "https://homapilot.com/404",
                ico: '/ico.png'
			}
		}
	}))
}