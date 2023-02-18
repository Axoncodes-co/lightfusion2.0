import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Link from 'next/link'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function LessonBox({
    svg,
    title,
    link,
    count
}) {
    return (
        <section className={'subcontainer vertical round_l3 fitWidth'} style={{boxShadow: '0px 23px 12px -16px rgb(0 0 0 / 47%)', backgroundImage: 'linear-gradient(155deg, #e2edff, #005ae880, #00235a)', maxWidth: '240px'}}>
            <Link href={link} className={'padding_l5'}>
                <Text
                    customclasses={'spread colgap_l3'}
                    svg={svg}
                    text={count}
                    textclasses={'font_l6 nomargin weight_l4'}
                    textcolor={'#fff'}
                />
                <Text
                    text={title}
                    textclasses={'font_l4 nomargin weight_l6'}
                    textcolor={'#fff'}
                />
            </Link>
        </section>
    )
}