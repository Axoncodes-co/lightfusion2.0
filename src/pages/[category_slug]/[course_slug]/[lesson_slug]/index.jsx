import dynamic from 'next/dynamic'
import fetchup from '../../../../../lib/fetch'
const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})
const Text = dynamic(() => import('../../../../../axg-react/Text2'), {ssr: false})
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Author from '../../../../../components/Author'

export default function Post({ categories, course_slug, category, course, lesson }) {
    return (
        <>
            <Header categories={categories} />
			<Navbar data={categories} current_slug={course_slug} />
            <section className={'container primary_bg vertical'}>
                <section id={'content_nav'} className={'wide subcontainer'}>
                    {/* On mobile, set the long texts ... and highlight the current item in the list */}
                    <Breadcrumb
                        categories={categories}
                        category={category}
                        course={course}
                    />
                </section>
                <div style={{width: '100%'}}>
                    <div
                        style={{
                            height: '25vw',
                            backgroundImage: `url(${lesson.thumbnail_url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                </div>
                <section className={'subcontainer'}>
                    <Author
                        name={lesson.author_name}
                        avatar_url={lesson.author_avatar}
                        date={lesson.updateDate || lesson.publishDate}
                    />
                </section>
            </section>
            <section className={'container'}>
                <SectionTitle
                    title={lesson.title}
                    textclasses={'font_l7 nomargin secondary_font'}
                />
            </section>
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
            course_slug,
            lesson_slug,
		}
    })
}