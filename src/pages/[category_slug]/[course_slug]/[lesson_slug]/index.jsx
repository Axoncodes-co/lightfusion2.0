import style from './lesson.module.css'
import fetchup from '../../../../../lib/fetch'
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Author from '../../../../../components/Author'
import Nextprev from '../../../../../components/Nextprev'
import Head from 'next/head'
import Footer from '../../../../../fragments/Footer'
import Script from 'next/script'
import Text from '../../../../../builtin-axg/text/v2'
import { useEffect } from 'react'

export default function Post({ categories, course_slug, category, course, lesson, metatags }) {
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
                <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
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
			<Navbar data={categories} current_slug={course_slug} />
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
                            course={course}
                        />
                    </section>
                    <div className={'subcontainer padding_l1'}></div>
                    <Nextprev
                        nextlink={lesson.next_slug ? `/${category.slug}/${course.slug}/${lesson.next_slug}` : ''}
                        prevlink={lesson.prev_slug ? `/${category.slug}/${course.slug}/${lesson.prev_slug}` : ''}
                    />
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
                    <ins className="adsbygoogle"
                        style={{display:'block'}}
                        data-ad-client="ca-pub-5146054383186265"
                        data-ad-slot="8969756356"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    ></ins>
                </section>
                {/* <aside style={{width: '270px', minHeight: '100vh'}} className={'hideOnMobile subcontainer padding_l1 topy'}>
                    <ins className="adsbygoogle"
                        style={{display:'inline-block',width:'250px',height:'500px'}}
                        data-ad-client="ca-pub-5146054383186265"
                        data-ad-slot="6515199005"
                    ></ins>
                </aside> */}
            </section>
            <Footer categories={categories} />
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265" crossorigin="anonymous"></Script>
            <Script id={'sidebar_ads'}>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
            
        </>
    )
}

export async function getStaticPaths() {
	return fetchup()
    .then(categories => categories.filter(cat => cat.slug != 'articles'))
	.then(categories => categories
		.map(category => category.courses
			.map(course => course.lessons
                .map(lesson => ({
                    params: {
                        category_slug: category.slug,
                        course_slug: course.slug,
                        lesson_slug: lesson.slug
                    }
                }))
            )
		)
	)
	.then(paths => {
        return ({
		paths: paths.flat(2),
		fallback: false
	})})
}
  
export const getStaticProps = async ({params}) => {

	const { category_slug, course_slug, lesson_slug } = params
    const categories = await fetchup()
    const category = categories.filter(category => category.slug == category_slug)[0]
    const course = category.courses.filter(course => course.slug == course_slug)[0]
    const lesson = course.lessons.filter(lesson => lesson.slug == lesson_slug)[0]
    return ({
        props: {
            categories,
            category,
            lesson,
            course,
            category_slug,
            course_slug: lesson.course_slug,
            lesson_slug,
            metatags: {
                title: lesson.metatags.title[0] || lesson.title,
                description: lesson.metatags.metadesc[0],
                href: `https://homapilot.com/${category.slug}/${course.slug}/${lesson.slug}`,
                ico: '/ico.png'
            }
        }
    })
}