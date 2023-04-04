
import style from './style.module.css'
import Link from 'next/link'
import Text from '../../builtin-axg/text/v2'

export default function CategoryBox({
    title,
    svg,
    link,
    courses_count,
}) {
    return (
        <Link href={link} className={`${style.cover} norowgap secondary_bg subcontainer vertical horizontalTabletBreak round_l3 fitWidth wideonTablet`}>
            <section className={`${style.head} straight vertical horizontalTabletBreak subcontainer vertical center`} style={{height: '100%'}}>
                <Text
                    text={title}
                    icon={{
                        svg,
                        customclasses: style.icon
                    }}
                    customclasses={`${style.title} fitWidthOnTablet fitminWidth textcenter center padding_l3 vertical horizontalTabletBreak`}
                    textclasses={'primary_color nomargin font_l6 weight_l6'}
                />
            </section>
            <section className={'norowgap subcontainer vertical horizontalTabletBreak fitWidth'}>
                <Text
                    text={'Explore'}
                    customclasses={'fitWidthOnTablet fitminWidth textcenter center padding_l0 vertical horizontalTabletBreak'}
                    textclasses={'primary_color nomargin font_l1 weight_l4'}
                    // link={link}
                />
                <section className={'subcontainer center horizontal padding_l3 verticalTabletBreak fitminWidth'}>
                    <div className={'subcontainer horizontal center'}>
                        <Text text={courses_count} customclasses={'center'} textclasses={'primary_color nomargin font_l1 weight_l6'} />
                        <Text text={'Courses'} customclasses={''} textclasses={'primary_color nomargin font_l1 weight_l6'} />
                    </div>
                </section>
            </section>
        </Link>
    )
}