import dynamic from 'next/dynamic'
import fetchup from '../../../../../lib/fetch'
const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'
import Breadcrumb from '../../../../../components/Breadcrumb'

export default function Post({ categories, course_slug, category, course, lesson }) {
    return (
        <>
            <Header categories={categories} />
			<Navbar data={categories} current_slug={course_slug} />
            <section style={{height: '25vw'}}>
                <Breadcrumb
                    categories={categories}
                    category={category}
                    course={course}
                />
                <div
                    style={{
                        height: '25vw',
                        backgroundImage: `url(${lesson.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>
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