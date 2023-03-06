
import dynamic from 'next/dynamic'
import Link from 'next/link'
import style from './style.module.css'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function CourseBox({
    svg,
    title,
    description,
    link,
    lessons,
    lessons_count,
    hours,
    paid,
    level,
    customclasses
}) {
    return (
        <article className={`${style.outer} subcontainer vertical round_l3 fitWidth ${customclasses}`}>
            <Link
                href={link}
                className={`${style.link} padding_l0 subcontainer vertical round_l3`}
            >
                <section className={`${style.inner} transition round_l3`}>
                    <div className={'subcontainer primary_bg round_l2 widePadding_l2'}>
                        <Text text={paid} textclasses={'tertiary_color font_l1 nomargin weight_l4'} />
                    </div>
                    <section className={'subcontainer padding_l2 widePadding_l3'}>
                        <Text
                            icon={JSON.stringify({svg})}
                            text={title}
                            textclasses={'horizontal tertiary_color font_l4 nomargin weight_l6'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal fitWidth spread colgap_l3'}
                        />
                        <Text
                            text={description}
                            textclasses={'textleft horizontal tertiary_color font_l2 nomargin weight_l4'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal spread colgap_l3'}
                        />
                    </section>
                    <div className={'subcontainer horizontal horizontalTabletBreak primary_bg round_l2 widePadding_l2'}>
                        <Text text={level} textclasses={'fitWidth tertiary_color font_l1 nomargin weight_l4'} />
                        <div className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
                            <div className={'subcontainer horizontal tooltip_parent center'}>
                                <Text text={lessons_count} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                                <Text text={'Lessons'} customclasses={'tooltip_content'} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                            </div>
                            <div className={'subcontainer horizontal tooltip_parent center'}>
                                <Text text={hours} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                                <Text text={'Hours'} customclasses={'tooltip_content'} textclasses={'tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                            </div>
                        </div>
                    </div>
                </section>
            </Link>
        </article>
    )
}