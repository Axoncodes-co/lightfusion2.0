
import dynamic from 'next/dynamic'
import Link from 'next/link'
import style from './style.module.css'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function CourseBox({
    svg,
    title,
    description,
    link,
    count,
    courseAttitude
}) {
    return (
        <section className={`${style.outer} subcontainer vertical round_l3 fitWidth`}>
            <Link href={link} className={`${style.link} padding_l0 subcontainer vertical round_l3`}>
                <article className={`${style.inner} round_l3`}>
                    <div className={'subcontainer primary_bg round_l2 widePadding_l2'}>
                        <Text text={'Free Course'} textclasses={'tertiary_color font_l1 nomargin weight_l4'} />
                    </div>
                    <Text
                        svg={svg}
                        text={title}
                        textclasses={'horizontal tertiary_color font_l3 nomargin weight_l6'}
                        customclasses={'horizontalTabletBreak padding_l1 widePadding_l2 horizontal spread colgap_l3'}
                    />
                    <div className={'subcontainer horizontal horizontalTabletBreak primary_bg round_l2 widePadding_l2'}>
                        <Text text={'Beginner Friendly'} textclasses={'fitWidth tertiary_color font_l1 nomargin weight_l4'} />
                        <div className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
                            <Text text={'10'} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                            <Text text={'19'} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                        </div>
                    </div>
                </article>
            </Link>
        </section>
    )
}