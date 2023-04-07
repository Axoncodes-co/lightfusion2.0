
import Link from 'next/link'
import style from './style.module.css'
import Text from '../../builtin-axg/text/v2'

export default function LessonBox({data, link, customclasses}) {
    return (
        <article className={`subcontainer vertical round_l3 ${customclasses}`}>
            <Link
                href={link}
                className={`padding_l0 subcontainer vertical round_l3`}
            >
                <section className={`${style.inner} transition round_l3 subcontainer spread padding_l3`}
                    style={{
                        backgroundImage: `linear-gradient(0deg, #000000ba, #00000066, #0001, #0002), url(${data.thumbnail_url || ''})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Tag */}
                    <section className={'subcontainer round_l2 rowgap_l1 colgap_l1'}>
                        {data.tags.map((tag, key) => key > 1 ? '' : <Text key={key} /*link={`/tag/${tag.slug}`}*/ text={tag.name} customclasses={`${style.opacity} tertiary_bg fitWidth round_l2`} textclasses={'secondary_font fitWidth primary_color font_l1 nomargin weight_l4 padding_slight'} />)}
                    </section>
                    <section className={'subcontainer vertical norowgap lefty'}>
                        <div className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
                            {/* Publish Date */}
                            <Text text={data.updateDate || data.publishDate} textclasses={'primary_color fitWidth font_l1 nomargin weight_l5'} />
                            {/* <Text text={'|'} textclasses={'fitWidth primary_color font_l1 nomargin weight_l4'} /> */}
                        </div>
                        <Text
                            text={data.title}
                            textclasses={'horizontal primary_color font_l6_min nomargin weight_l6'}
                            customclasses={`${style.title} horizontalTabletBreak padding_l0 horizontal spread colgap_l3`}
                        />
                        {/* <Text
                            text={data.description}
                            textclasses={'textleft horizontal tertiary_color font_l2 nomargin weight_l4'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal spread colgap_l3'}
                        /> */}
                    </section>
                </section>
            </Link>
        </article>
    )
}
