import dynamic from 'next/dynamic'

const AxgBreadcrumb = dynamic(() => import('../../axg-react/Breadcrumb'), {ssr: false})
export default function Breadcrumb({
    categories,
    category,
    course
}) {
    return <AxgBreadcrumb
        dev={'staging'}
        customclasses={'horizontalTabletBreak'}
        primaryText={{
            text: 'Home',
            link: '/',
            textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            customclasses: 'fitWidth',
        }}
        dropdownone_head={{
            text: {
                text: category.title,
                textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            },
            structure: 'simple',
            dropdownid: 'breadcrumb_category_id',
            targetLocator: 'breadcrumb_category',
            subtrigger: 'click',
            subopening: 'sub',
            listclasses: 'tertiary_bg fitWidth round_l2 padding_l1 subcontainer vertical lefty rowgap_l0 verticalTabletBreak',
            bodyclasses: 'fitWidth',
            options: categories.map(thiscategory => ({
                level: 'undertab',
                text: {
                    text: thiscategory.title,
                    link: `/${thiscategory.slug}`,
                    textclasses: `${thiscategory.slug == category.slug ? 'secondary_bg secondary_color' : 'primary_color tertiary_color_hover'} round_l1 widePadding_l1 weight_l3 font_l2 secondary_font nomargin`,
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
        dropdowntwo_head={course ? {
            text: {
                text: course.title,
                textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            },
            structure: 'simple',
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
            listclasses: 'tertiary_bg fitWidth round_l2 padding_l1 subcontainer vertical lefty rowgap_l0 verticalTabletBreak',
            bodyclasses: 'fitWidth',
            options: category.courses.map(thiscourse => ({
                level: 'undertab',
                text: {
                    text: thiscourse.title,
                    link: `/${category.slug}/${thiscourse.slug}`,
                    textclasses: `${thiscourse.slug == course.slug ? 'secondary_bg secondary_color' : 'primary_color tertiary_color_hover'} round_l1 widePadding_l1 weight_l3 font_l2 secondary_font nomargin`,
                },
            })),
        } : null}
        dropdowntwo_body={course ? {
            structure: 'simple',
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
        } : null}
    />
}