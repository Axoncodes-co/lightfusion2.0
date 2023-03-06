
import dynamic from 'next/dynamic'
import Link from 'next/link'
import style from './style.module.css'
import Image from 'next/image'
import { useEffect } from 'react'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function LessonBox({data, link, customclasses}) {
    return (
        <article className={`subcontainer vertical round_l3 ${customclasses}`}>
            <Link
                href={link}
                className={`padding_l0 subcontainer vertical round_l3`}
            >
                <section className={`${style.inner} transition round_l3 subcontainer spread padding_l3`}
                    style={{
                        backgroundImage: `linear-gradient(0deg, #000000ab, #0000005c, #0001, #0002), url(${data.thumbnail})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <section className={'subcontainer round_l2'}>
                        {/* Tag */}
                        <Text text={data.tag} customclasses={'primary_bg fitWidth round_l5'} textclasses={'fitWidth tertiary_color font_l1 nomargin weight_l4 padding_l1 widePadding_l2'} />
                    </section>
                    <section className={'subcontainer vertical norowgap lefty'}>
                        <div className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
                            {/* Publish Date */}
                            <Text text={data.updateDate || data.publishDate} textclasses={'fitWidth tertiary_color font_l1 nomargin weight_l6'} />
                            <Text text={'|'} textclasses={'fitWidth tertiary_color font_l1 nomargin weight_l4'} />
                            {/* Estimated Time to Read */}
                            <Text text={data.ETtR ? `${data.ETtR} mins` : ''} textclasses={'tertiary_color font_l1 nomargin weight_l6 fitWidth'} />
                        </div>
                        <Text
                            text={data.title}
                            textclasses={'gloock horizontal tertiary_color font_l6_min nomargin weight_l6'}
                            customclasses={'horizontalTabletBreak padding_l0 horizontal spread colgap_l3'}
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
