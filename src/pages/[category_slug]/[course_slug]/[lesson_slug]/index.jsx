import dynamic from 'next/dynamic'
import Link from 'next/link'
import fetchup from '../../../../../lib/fetch'
const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})
const DropdownBody = dynamic(() => import('../../../../../axg-react/DropdownBody'), {ssr: false})
const DropdownHead = dynamic(() => import('../../../../../axg-react/DropdownHead'), {ssr: false})

export default function Post({ categories, category, course, lesson }) {
    return (
        <>
            <section style={{height: '25vw'}}>
                {/* breadcrumb */}
                <div>
                    <Link href={'/'}>Home</Link>
                    /
                    <DropdownHead
                        color={'red'}
                        colorHover={'blue'}
                        activeBackground={'#0000'}
                        headBackground={'#0000'}
                        headBackgroundHover={'#0000'}
                        structure={'simple'}
                        title={'course.title'}
                        headtitle={'title'}
                        // link={`/${category.slug}/${course.slug}`}
                        dropdownid={'breadcrumb_course_id'}
                        targetLocator={'breadcrumb_course'}
                        subtrigger={'click'}
                        subopening={'sub'}
                        background={'green'}
                        dir={'ltr'}
                    />
                    <section className="ax_elements" nomain="true">
                        <DropdownBody
                            structure={'simple'}
                            title={'course.title'}
                            dropdownid={'breadcrumb_course_id'}
                            targetLocator={'breadcrumb_course'}
                            subtrigger={'click'}
                            subopening={'sub'}
                            background={'var(--dark)'}
                            options={
                                categories.map(category => ({
                                    title: category.title,
                                    url: `/${category.slug}`,
                                    level: 'undertab',
                                    color: '#e6e6e6',
                                    colorHover: '#fff',
                                    fontsize: 'var(--l4-text-fontSize)',
                                    dir: 'rtl',
                                    activeBg: 'var(--secondaryColor)',
                                }))
                            //     [
                                
                            //     {
                            //         title: 'سیمان تهران پاکتی',
                            //         url: '/shop/tehran-cement',
                            //         level: 'undertab',
                            //         color: 'var(--secondaryColor)',
                            //         fontsize: 'var(--l4-text-fontSize)',
                            //         dir: 'rtl',
                            //         activeBg: 'var(--secondaryColor)',
                            //     },
                            // ]
                        }
                        />
                    </section>
                    / {course.title}
                </div>
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
		}
    })
}