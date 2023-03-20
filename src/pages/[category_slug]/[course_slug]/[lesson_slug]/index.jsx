import dynamic from 'next/dynamic'
import Link from 'next/link'
import fetchup from '../../../../../lib/fetch'
const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})
// const DropdownBody = dynamic(() => import('../../../../../axg-react/DropdownBody5'), {ssr: false})
// const DropdownHead = dynamic(() => import('../../../../../axg-react/DropdownHead5'), {ssr: false})
const Breadcrumb = dynamic(() => import('../../../../../axg-react/Breadcrumb'), {ssr: false})
import Header from '../../../../../fragments/Header'
import Navbar from '../../../../../fragments/Navbar'

export default function Post({ categories, course_slug, category, course, lesson }) {
    return (
        <>
            <Header categories={categories} />
			<Navbar data={categories} current_slug={course_slug} />
            <section style={{height: '25vw'}}>
                {/* breadcrumb */}
                <Breadcrumb
                    dev={'staging'}
                    primaryText={{
                        text: 'Home',
                        link: '/',
                        textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color tertiary_color_hover',
                        customclasses: 'fitWidth',
                    }}
                    dropdownone_head={{
                        dev: 'staging',
                        text: {
                            text: category.title,
                            textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color tertiary_color_hover',
                        },
                        structure: 'simple',
                        dropdownid: 'breadcrumb_category_id',
                        targetLocator: 'breadcrumb_category',
                        subtrigger: 'click',
                        subopening: 'sub',
                        listclasses: 'tertiary_bg fitWidth round_l2 padding_l1',
                        bodyclasses: 'fitWidth',
                        options: categories.map(category => ({
                            level: 'undertab',
                            text: {
                                text: category.title,
                                link: `/${category.slug}`,
                                textclasses: 'weight_l3 font_l3 secondary_font nomargin primary_color tertiary_color_hover',
                            },
                        })),
                    }}
                    dropdownone_body={{
                        dev: 'staging',
                        structure: 'simple',
                        dropdownid: 'breadcrumb_category_id',
                        targetLocator: 'breadcrumb_category',
                        subtrigger: 'click',
                        subopening: 'sub',
                    }}
                    dropdowntwo_head={{
                        dev: 'staging',
                        text: {
                            text: course.title,
                            textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color tertiary_color_hover',
                        },
                        structure: 'simple',
                        dropdownid: 'breadcrumb_course_id',
                        targetLocator: 'breadcrumb_course',
                        subtrigger: 'click',
                        subopening: 'sub',
                        listclasses: 'tertiary_bg fitWidth round_l2 padding_l1',
                        bodyclasses: 'fitWidth',
                        options: category.courses.map(course => ({
                            level: 'undertab',
                            text: {
                                text: course.title,
                                link: `/${category.slug}/${course.slug}`,
                                textclasses: 'weight_l3 font_l3 secondary_font nomargin primary_color tertiary_color_hover',
                            },
                        })),
                    }}
                    dropdowntwo_body={{
                        dev: 'staging',
                        structure: 'simple',
                        dropdownid: 'breadcrumb_course_id',
                        targetLocator: 'breadcrumb_course',
                        subtrigger: 'click',
                        subopening: 'sub',
                    }}
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