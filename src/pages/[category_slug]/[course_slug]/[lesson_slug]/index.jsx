import style from './lesson.module.css'
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Author from '../../../../../components/Author'
import Nextprev from '../../../../../components/Nextprev'
import Head from 'next/head'
import Footer from '../../../../../fragments/Footer'
import Text from '../../../../../builtin-axg/text/v2'
import { getAllLessonsBasics, getLesson } from '../../../../../lib/fetch/lesson'
import { getAllCoursesBasics, getCourse, getCoursesByCategories } from '../../../../../lib/fetch/course'
import { getCategoriesBasics, getCategoryBasics } from '../../../../../lib/fetch/category'
import { readFooter } from '../../../../../lib/fetch/footer'
import SideAds from '../../../../../components/SideAds'
import BottomAds from '../../../../../components/BottomAds'

export default function Post({ footerData, courseslist, categories, category_slug, course_slug, category, courses, course, lesson, metatags }) {
    const postIntro = (color) => {
        const author_data = lesson.attributes.users_permissions_user.data.attributes
        return (<>
            <Text
                text={lesson.attributes.Title}
                textclasses={`${color} lefty font_l8 nomargin secondary_font weight_l3`}
                customclasses={'fitHeight'}
            />
            <Author
                name={author_data.display_name}
                avatar_url={`/data/media/${author_data.Avatar.data.attributes.hash+author_data.Avatar.data.attributes.ext}`}
                date={lesson.attributes.updatedAt || lesson.attributes.publishedAt}
                color={color}
            />
        </>)
    }

    return (
        <>
            <Head>
                <title>{lesson.attributes.SEO.metaTitle}</title>
                <meta name="description" content={lesson.attributes.SEO.metaDescription} key={"description"} />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
                <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
                <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
                <link rel="canonical" href={metatags.href} key={"canonical"} />
                <meta name="keywords" content={lesson.attributes.SEO.keywords}/>
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
			<Navbar categories={categories} courses={courses} current_slug={course_slug} />
            <section className={'primary_bg subcontainer horizontal widePadding_l0 topy colgap_l0'}>
                <section className={'subcontainer padding_l3 vertical'}>
                    <section id={'content_nav'} className={'wide subcontainer'}>
                    <Breadcrumb
                        categories={categories}
                        courses={courseslist}
                        category={category}
                        course={course}
                    />
                    </section>
                    <div className={'subcontainer padding_l1'}></div>
                    <Nextprev
                        nextlink={lesson.attributes.Next.data ? `/${category_slug}/${course_slug}/${lesson.attributes.Next.data.attributes.Slug}` : ''}
                        prevlink={lesson.attributes.Previous.data ? `/${category_slug}/${course_slug}/${lesson.attributes.Previous.data.attributes.Slug}` : ''}
                    />
                    <section style={{width: '100%'}}>
                        <div
                            style={{
                                height: '25vw',
                                backgroundImage: `linear-gradient(0deg, #0002, #0000001f, #00000057, #00000087, #000000ba), url(/data/media/${lesson.attributes.SEO.metaImage.data ? lesson.attributes.SEO.metaImage.data.attributes.hash+lesson.attributes.SEO.metaImage.data.attributes.ext : ''})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className={'lefty subcontainer vertical padding_l3 widePadding_l6 round_l3'}
                        >
                            <div className={'hideOnTablet'}>{postIntro('primary_color')}</div>
                        </div>
                    </section>
                    <div className={'hide visibleOnTablet wide lefty'}>{postIntro('secondary_color')}</div>
                    <p className={`${style.excerpt} font_l4 weight_l3 secondary_color`} dangerouslySetInnerHTML={{__html: lesson.attributes.Excerpt}}></p>
                    <main id='content' className={`${style.content}`}><span dangerouslySetInnerHTML={{__html: lesson.attributes.Content}}></span></main>
                    <BottomAds />
                </section>
                <SideAds />
            </section>
            <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": metatags.title,
                        "image": lesson.imageslist.map(img => `${process.env.DOMAIN}${img}/`),
                        "datePublished": lesson.publishDate,
                        "dateModified": lesson.updateDate,
                        "author": [{
                            "@type": "Person",
                            "name": lesson.author_name,
                            "url": `${process.env.DOMAIN}/about/`
                        }]
                    })
				}}
			/>
            <Footer footerData={footerData} categories={categories} />
        </>
    )
}

export async function getStaticPaths() {
    return getAllLessonsBasics()
    .then(lessons => lessons.filter(({course_slug}) => course_slug != 'article'))
    .then(lessons => lessons.filter(({course_slug}) => course_slug != 'blog'))
	.then(lessons => lessons.map(({category_slug, course_slug, lesson_slug}) => ({
        params: {category_slug, course_slug, lesson_slug}
    })))
	.then(paths => ({ paths, fallback: false }))
}

export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug, lesson_slug } = params
    const categories = await getCategoriesBasics()
    const courses = await getCoursesByCategories()
    const category = await getCategoryBasics(category_slug)
	const course = await getCourse(course_slug)
    const lesson = await getLesson(lesson_slug)
    const courseslist = await getAllCoursesBasics()
    const footerData = await readFooter()
    return ({
        props: {
            courseslist,
            categories,
            category,
            lesson,
            course,
            courses,
            category_slug,
            course_slug,
            lesson_slug,
            footerData,
            metatags: {
                href: `${process.env.DOMAIN}/${category_slug}/${course_slug}/${lesson_slug}/`,
                ico: '/favicon.ico'
            }
        }
    })
}