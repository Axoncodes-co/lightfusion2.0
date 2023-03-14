import dynamic from 'next/dynamic'
import Link from 'next/link'
const SectionTitle = dynamic(() => import('../../../../../axg-react/SectionTitle'), {ssr: false})
const DropdownBody = dynamic(() => import('../../../../../axg-react/DropdownBody'), {ssr: false})
const DropdownHead = dynamic(() => import('../../../../../axg-react/DropdownHead'), {ssr: false})

export default function Post({ category_slug, course_slug, lesson_slug, categories }) {

    const category = categories.filter(category => category.slug == category_slug ? category : null)[0]
	const course = category.courses.filter(course => course.slug == course_slug ? course : null)[0]
	const lesson = course.lessons.filter(lesson => lesson.slug == lesson_slug ? lesson : null)[0]

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
	
    // const paths = categories.map(category => ({params: {
	// 	archive: category.slug
	// }}))

	const paths = [
		{params: {category_slug: 'general', course_slug: 'course2', lesson_slug: 'lesson1'}},
		{params: {category_slug: 'general', course_slug: 'course2', lesson_slug: 'lesson2'}},
	]

	return {
      paths,
      fallback: false
    }
}
  
export const getStaticProps = async ({params}) => {
	const { category_slug, course_slug, lesson_slug } = params

	// const category = categories.filter(category => category.slug == archive ? category : null)[0]
    
    return {
      props: {category_slug, course_slug, lesson_slug}
    }
}