import dynamic from 'next/dynamic'
import style from './style.module.css'
import fetchup from '../../../lib/fetch'
const Text = dynamic(() => import('../../../axg-react/Text2'), {ssr: false})
import Header from '../../../fragments/Header'
import Navbar from '../../../fragments/Navbar'
import Breadcrumb from '../../../components/Breadcrumb'
import Author from '../../../components/Author'
import Nextprev from '../../../components/Nextprev'
import MetaTags from '../../../axg-react/MetaTags'
const Stringtohtml = dynamic(() => import('../../../axg-react/Stringtohtml'), {ssr: false})
import Head from 'next/head'
const Axg = dynamic(() => import('../../../axg-react/Run'), {ssr: false})

export default function Post({ categories, course_slug, category, course, lesson }) {
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
				<title>{lesson.title} - Homa Pilot</title>
				<MetaTags
					title={lesson.title}
					description={lesson.excerpt}
					href={`https://homapilot.com/${category.slug}/${course.slug}/${lesson.slug}`}
					ico={'/ico.png'}
				/>
			</Head>
            <Header categories={categories} />
			<Navbar data={categories} current_slug={course_slug} />
            <section className={'container primary_bg vertical'}>
                <section id={'content_nav'} className={'wide subcontainer'}>
                    <Breadcrumb
                        categories={categories}
                        category={category}
                        course={course}
                    />
                </section>
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
                <article id='content' className={`${style.content}`}>
                    <Stringtohtml
                        html={lesson.content}
                    />
                </article>
            </section>
            <Axg />
        </>
    )
}

export async function getStaticPaths() {
	return fetchup()
	.then(categories => categories
		.map(category => category.courses
			.map(course => course.lessons
                .map(lesson => ({
                    params: {
                        category_slug: category.slug,
                        // course_slug: course.slug,
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

	const { category_slug, lesson_slug } = params
    const categories = await fetchup()
    const category = categories.filter(category => category.slug == category_slug)[0]
    const lesson = course.lessons.filter(lesson => lesson.slug == lesson_slug)[0]
    const course = category.courses.filter(course => course.slug == lesson.course_slug)[0]
    return ({
        props: {
            categories,
            category,
            lesson,
            course,
            category_slug,
            course_slug: lesson.course_slug,
            lesson_slug,
        }
    })
}