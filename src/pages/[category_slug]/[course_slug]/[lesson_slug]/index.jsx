import dynamic from 'next/dynamic'
import fetchup from '../../../../../lib/fetch'
const Text = dynamic(() => import('../../../../../axg-react/Text2'), {ssr: false})
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'
import Breadcrumb from '../../../../../components/Breadcrumb'
import Author from '../../../../../components/Author'

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
                <div style={{width: '100%'}}>
                    <section
                        style={{
                            height: '25vw',
                            backgroundImage: `linear-gradient(0deg, #0002, #0000001f, #00000057, #00000087, #000000ba), url(${lesson.thumbnail_url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        className={'subcontainer vertical padding_l3 widePadding_l6 round_l3'}
                    >
                        <div className={'hideOnTablet'}>{postIntro('primary_color')}</div>
                    </section>
                </div>
                <div className={'hide visibleOnTablet'}>{postIntro('secondary_color')}</div>
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