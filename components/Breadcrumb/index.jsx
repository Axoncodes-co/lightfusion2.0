import { AxgBreadcrumb } from '../../builtin-axg/Breadcrumb/v1'


export default function Breadcrumb({
    categories,
    category,
    course,
    courses,
}) {

    const dropdownone_options = category ? categories.map(thiscategory => ({
        level: 'undertab',
        text: {
            text: thiscategory.title,
            link: `/${thiscategory.slug}`,
            textclasses: `${thiscategory.slug == category.slug ? 'secondary_bg secondary_color' : 'primary_color tertiary_color_hover'} round_l1 widePadding_l1 weight_l3 font_l2 secondary_font nomargin`,
        },
    })) : null

    const dropdowntwo_options = category ? courses.map(thiscourse => ({
        level: 'undertab',
        text: {
            text: thiscourse.title,
            link: `/${thiscourse.category_slug}/${thiscourse.course_slug}`,
            textclasses: `${thiscourse.course_slug == course.attributes.Slug ? 'secondary_bg secondary_color' : 'primary_color tertiary_color_hover'} round_l1 widePadding_l1 weight_l3 font_l2 secondary_font nomargin`,
        },
    })) : null


    return <AxgBreadcrumb
        customclasses={'horizontalTabletBreak'}
        primaryText={{
            text: 'Home',
            link: '/',
            textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            customclasses: 'fitWidth',
        }}
        dropdownone_head={category ? {
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
            options: dropdownone_options,
        } : {}}
        dropdownone_body={category ? {
            structure: 'simple',
            dropdownid: 'breadcrumb_category_id',
            targetLocator: 'breadcrumb_category',
            subtrigger: 'click',
            subopening: 'sub',
            text: {
                text: category.title,
                textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            },
            dropdownid: 'breadcrumb_category_id',
            targetLocator: 'breadcrumb_category',
            subtrigger: 'click',
            subopening: 'sub',
            listclasses: 'tertiary_bg fitWidth round_l2 padding_l1 subcontainer vertical lefty rowgap_l0 verticalTabletBreak',
            bodyclasses: 'fitWidth',
            options: dropdownone_options,
        } : {}}
        dropdowntwo_head={course ? {
            text: {
                text: course.attributes.Title,
                textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            },
            structure: 'simple',
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
            listclasses: 'tertiary_bg fitWidth round_l2 padding_l1 subcontainer vertical lefty rowgap_l0 verticalTabletBreak',
            bodyclasses: 'fitWidth',
            options: dropdowntwo_options
        } : {}}
        dropdowntwo_body={course ? {
            structure: 'simple',
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
            text: {
                text: course.attributes.Title,
                textclasses: 'weight_l3 font_l2 secondary_font nomargin secondary_color tertiary_color_hover',
            },
            dropdownid: 'breadcrumb_course_id',
            targetLocator: 'breadcrumb_course',
            subtrigger: 'click',
            subopening: 'sub',
            listclasses: 'tertiary_bg fitWidth round_l2 padding_l1 subcontainer vertical lefty rowgap_l0 verticalTabletBreak',
            bodyclasses: 'fitWidth',
            options: dropdowntwo_options,
        } : {}}
    />
}