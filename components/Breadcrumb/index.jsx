import dynamic from 'next/dynamic'

const AxgBreadcrumb = dynamic(() => import('../../axg-react/Breadcrumb'), {ssr: false})
export default function Breadcrumb({
    categories,
    category,
    course
}) {
    return <AxgBreadcrumb
        primaryText={{
            text: 'Home',
            link: '/',
            textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color tertiary_color_hover',
            customclasses: 'fitWidth',
        }}
        dropdownone_head={{
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
            structure: 'simple',
            dropdownid: 'breadcrumb_category_id',
            targetLocator: 'breadcrumb_category',
            subtrigger: 'click',
            subopening: 'sub',
        }}
        dropdowntwo_head={{
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
            structure: 'simple',
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
        }}
    />
}