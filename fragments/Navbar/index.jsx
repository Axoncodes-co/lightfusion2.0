
import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Navbar({data, current_slug}) {
    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 20,
            }}
            className={'topy subcontainer horizontal horizontalTabletBreak tertiary_bg colgap_l0'}
        >
            <Text text={'Home'} link={`/`} customclasses={'fitWidth'} textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`} />
            <section
                style={{overflowX: 'scroll'}}
                className={'subcontainer horizontal horizontalTabletBreak tertiary_bg colgap_l0'}
            >
                {data
                    .map(category => category.courses
                        .map((course, key) => <Text key={key} customclasses={'fitWidth'} text={course.title} link={`/${category.slug}/${course.slug}`} textclasses={`${current_slug == course.slug ? 'secondary_bg tertiary_color' : 'primary_color secondary_color_hover'} transition fitWidth padding_l1 weight_l3 font_l2`} />)
                    )
                }
            </section>
            <Text text={'Darkmode'} link={`/`} customclasses={'fitWidth'} textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`} />
            <Text text={'Translate'} link={`/`} customclasses={'fitWidth'} textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`} />
        </nav>
    )
}