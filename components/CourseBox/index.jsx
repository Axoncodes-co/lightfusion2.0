
import Link from 'next/link'
import style from './style.module.css'
import Text from '../../builtin-axg/text/v2'

export default function CourseBox({
    svg,
    title,
    description,
    link,
    lessons_count,
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
                <section className={`${style.inner} transition secondary_bg round_l3`}>
                    <div className={'subcontainer tertiary_bg widePadding_l2'} style={{transform: 'translateY(-1px)', borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                        <Text text={paid} textclasses={'primary_color secondary_font font_l1 nomargin weight_l4'} />
                    </div>
                    <section className={'subcontainer padding_l2 widePadding_l3'}>
                        <Text
                            icon={{
                                svg,
                                customclasses: style.icon
                            }}
                            text={title}
                            textclasses={'horizontal primary_color font_l5_min nomargin weight_l4'}
                            customclasses={'straight horizontalTabletBreak padding_l0 horizontal fitWidth spread colgap_l3'}
                        />
                        <Text
                            text={description}
                            textclasses={'textleft horizontal primary_color font_l2 nomargin weight_l4'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal spread colgap_l3'}
                        />
                    </section>
                    <div className={'subcontainer spread horizontal horizontalTabletBreak tertiary_bg widePadding_l2'} style={{transform: 'translateY(1px)', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: '0', borderTopLeftRadius: '0'}}>
                        <Text text={level} customclasses={'fitWidth'} textclasses={'secondary_font fitWidth primary_color font_l1 nomargin weight_l4'} />
                        <Text text={`${lessons_count} Lessons`} customclasses={'fitWidth'} textclasses={'secondary_font primary_color font_l1 nomargin weight_l4 fitWidth'} />
                    </div>
                </section>
            </Link>
        </article>
    )
}