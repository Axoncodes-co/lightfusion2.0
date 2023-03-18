
import dynamic from 'next/dynamic'
import style from './style.module.css'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Posts({link, title, svg, children}) {
    return (
        <section className={'transition container vertical primary_bg'}>
            <section className={'subcontainer horizontal'}>
                <Text
                    text={title}
                    textclasses={'font_l4 nomargin weight_l4 primary_color'}
                    customclasses={'centerOnMobile allLefty horizontal'}
                    icon={JSON.stringify({
                        svg,
                        customclasses: style.icon
                    })}
                />

                <Text
                    text={'View All'}
                    link={link}
                    textclasses={'font_l2 nomargin weight_l4'}
                    customclasses={'centerOnMobile righty'}
                />
            </section>
            <section className={'subcontainer horizontal verticalLargeTabletBreak rowgap_l3'}>
                {children}
            </section>
        </section>
    )
}