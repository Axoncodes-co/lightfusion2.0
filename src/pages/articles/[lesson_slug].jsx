import style from './lesson.module.css'
import fetchup from '../../../lib/fetch'
import Header from '../../../fragments/Header'
import Navbar from '../../../fragments/Navbar'
import Breadcrumb from '../../../components/Breadcrumb'
import Author from '../../../components/Author'
import Head from 'next/head'
import Footer from '../../../fragments/Footer'
import Script from 'next/script'
import Text from '../../../builtin-axg/text/v2'

export default function Post({ categories, category, lesson, metatags }) {
    const postIntro = (color) => (<>
        <Text
            text={lesson.title}
            textclasses={`${color} lefty font_l8 nomargin secondary_font weight_l3`}
            customclasses={'fitHeight'}
        />
        <Author
            name={lesson.author_name}
            avatar_url={lesson.author_avatar}
            date={lesson.updateDate || lesson.publishDate}
            color={color}
        />
    </>)

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
            <section className={'primary_bg subcontainer horizontal widePadding_l0 topy colgap_l0'}>
                {/* <aside className={'hideOnMobile'}>
                    <p style={{visibility: 'hidden'}}>sidebar</p>
                </aside> */}
                <section className={'subcontainer padding_l3 vertical'}>
                    {/* <div style={{minHeight: '100px', width: '100%'}}>
                        <ins className="adsbygoogle"
                            style={{display:'inline-block', width:'600px', height:'90px'}}
                            data-ad-client="ca-pub-5146054383186265"
                            data-ad-slot="8430915906"
                        ></ins>
                    </div> */}
                    <section id={'content_nav'} className={'wide subcontainer'}>
                        <Breadcrumb
                            categories={categories}
                            category={category}
                        />
                    </section>
                    <div className={'subcontainer padding_l1'}></div>
                    <div style={{width: '100%'}}>
                        <section
                            style={{
                                height: '25vw',
                                backgroundImage: `linear-gradient(0deg, #0002, #0000001f, #00000057, #00000087, #000000ba), url(${lesson.thumbnail_url})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className={'lefty subcontainer vertical padding_l3 widePadding_l6 round_l3'}
                        >
                            <div className={'hideOnTablet'}>{postIntro('primary_color')}</div>
                        </section>
                    </div>
                    <div className={'hide visibleOnTablet wide lefty'}>{postIntro('secondary_color')}</div>
                    <Text
                        text={lesson.excerpt}
                        textclasses={`${style.excerpt} font_l4 weight_l3 secondary_color`}
                    />
                    <main id='content' className={`${style.content}`} dangerouslySetInnerHTML={{__html: lesson.content}}></main>
                    <section id='belowads' className={'subcontainer horizontal center padding_l3 verticalTabletBreak'}>
                        {/* <!-- /22901649087/contentButtom --> */}
                        <div id='div-gpt-ad-1680990353679-0' style={{minWidth: '120px', minHeight: '20px', maxWidth: '100vw'}}>
                            <script dangerouslySetInnerHTML={{__html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1680990353679-0'); });`}} />
                        </div>
                        {/* <!-- /22901649087/contentBottom2 --> */}
                        <div id='div-gpt-ad-1681030185439-0' style={{minWidth: '250px', minHeight: '250px'}}>
                            <script dangerouslySetInnerHTML={{__html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1681030185439-0'); });`}} />
                        </div>
                    </section>
                </section>
                <aside style={{position: 'sticky', top: '38px'}} className={'centerImgOnmobileBreakpoint fitWidth horizontalMobileBreak subcontainer vertical'}>
                    {/* <!-- /22901649087/sidebar --> */}
                    <div id='div-gpt-ad-1680994203642-0' style={{minWidth: '120px', minHeight: '240px'}}>
                        <script dangerouslySetInnerHTML={{__html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1680994203642-0'); });`}} />
                    </div>
                    {/* <!-- /22901649087/sidebar2 --> */}
                    <div id='div-gpt-ad-1680994309478-0' style={{minWidth: '120px', minHeight: '240px'}}>
                        <script dangerouslySetInnerHTML={{__html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1680994309478-0'); });`}} />                        
                    </div>
                </aside>
            </section>
            <Footer categories={categories} />
            <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": metatags.title,
                        "image": lesson.imageslist.map(img => `https://homapilot.com${img}`),
                        "datePublished": lesson.publishDate,
                        "dateModified": lesson.updateDate,
                        "author": [{
                            "@type": "Person",
                            "name": lesson.author_name,
                            "url": "https://homapilot.com/about"
                        }]
                    })
				}}
			/>
            
        </>
    )
}

export async function getStaticPaths() {
	return fetchup()
    .then(categories => categories.filter(cat => cat.slug == 'articles')[0])
	.then(articles_cat => articles_cat.lessons
        .map(lesson => ({
            params: {
                lesson_slug: lesson.slug
            }
        }))
	)
	.then(paths => {
        return ({
		paths: paths.flat(2),
		fallback: false
	})})
}
  
export const getStaticProps = async ({params}) => {

	const { lesson_slug } = params
    const categories = await fetchup()
    const articles_cat = categories.filter(cat => cat.slug == 'articles')[0]
    const lesson = articles_cat.lessons.filter(lesson => lesson.slug == lesson_slug)[0]
    return ({
        props: {
            categories,
            category: articles_cat,
            lesson,
            metatags: {
                title: lesson.metatags.title[0] || lesson.title,
                description: lesson.metatags.metadesc[0],
                href: `https://homapilot.com/${articles_cat.slug}/${lesson.slug}`,
                ico: '/ico.png'
            }
        }
    })
}