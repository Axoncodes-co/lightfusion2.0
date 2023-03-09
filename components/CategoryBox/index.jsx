
import dynamic from 'next/dynamic'
import style from './style.module.css'
import Link from 'next/link'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function CategoryBox({
    title,
    svg,
    link,
}) {
    return (
        <Link href={link} className={`${style.cover} primary_bg subcontainer vertical horizontalTabletBreak round_l3 fitWidth wideonTablet`}>
            <section className={`${style.head} straight vertical horizontalTabletBreak subcontainer vertical center`} style={{height: '100%'}}>
                <Text
                    text={title}
                    icon={JSON.stringify({svg})}
                    customclasses={`${style.title} fitWidthOnTablet fitminWidth textcenter center padding_l5 vertical horizontalTabletBreak`}
                    textclasses={'tertiary_color nomargin font_l6 weight_l6'}
                />
            </section>
            <section className={'subcontainer vertical horizontalTabletBreak fitWidth'}>
                <Text
                    text={'Explore'}
                    customclasses={'fitWidthOnTablet fitminWidth textcenter center padding_l0 vertical horizontalTabletBreak'}
                    textclasses={'tertiary_color nomargin font_l1 weight_l4'}
                    // link={link}
                />
                <section className={'subcontainer center horizontal padding_l3 verticalTabletBreak fitminWidth'}>
                    <div className={'subcontainer horizontal tooltip_parent center'}>
                        <Text text={'3'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                        <Text text={'Courses'} customclasses={'tooltip_content'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                    </div>
                    <div className={'subcontainer horizontal tooltip_parent'}>
                        <Text text={'31'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                        <Text text={'Lessons'} customclasses={'tooltip_content lefty'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                    </div>
                    <div className={'subcontainer horizontal tooltip_parent'}>
                        <Text text={'131'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                        <Text text={'Hours'} customclasses={'tooltip_content lefty'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                    </div>
                </section>
            </section>
        </Link>
    )
}