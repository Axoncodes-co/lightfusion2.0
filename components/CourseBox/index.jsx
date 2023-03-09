
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
                    <div className={'subcontainer primary_bg widePadding_l2'} style={{borderBottomRightRadius: '0px', borderBottomLeftRadius: '0px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                        <Text text={paid} textclasses={'tertiary_color secondary_font font_l1 nomargin weight_l4'} />
                    </div>
                    <section className={'subcontainer padding_l2 widePadding_l3'}>
                        <Text
                            icon={JSON.stringify({svg})}
                            text={title}
                            textclasses={'horizontal tertiary_color font_l5_min nomargin weight_l4'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal fitWidth spread colgap_l3'}
                        />
                        <Text
                            text={description}
                            textclasses={'textleft horizontal tertiary_color font_l2 nomargin weight_l4'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal spread colgap_l3'}
                        />
                    </section>
                    <div className={'subcontainer spread horizontal horizontalTabletBreak primary_bg widePadding_l2'} style={{borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: '0', borderTopLeftRadius: '0'}}>
                        <Text text={level} textclasses={'secondary_font fitWidth tertiary_color font_l1 nomargin weight_l4'} />
                        <Text text={`${lessons_count} Lessons`} customclasses={'fitWidth'} textclasses={'secondary_font tertiary_color font_l1 nomargin weight_l4 fitWidth'} />
                    </div>
                </section>
            </Link>
        </article>
    )
}