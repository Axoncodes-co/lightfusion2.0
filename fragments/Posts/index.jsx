
import Text from '../../builtin-axg/text/v2'
import style from './style.module.css'

export default function Posts({link, title, svg, children}) {
    return (
        <section className={'transition container vertical primary_bg'}>
            <section className={'subcontainer horizontal'}>
                <Text
                    text={title}
                    textclasses={'font_l4 nomargin weight_l4 secondary_color'}
                    customclasses={'centerOnMobile allLefty horizontal'}
                    icon={{
                        svg,
                        customclasses: style.icon
                    }}
                />

                <Text
                    text={'View All'}
                    link={link}
                    textclasses={'style_dynamic_a font_l2 nomargin weight_l4'}
                    customclasses={'centerOnMobile righty'}
                />
            </section>
            <section className={'subcontainer horizontal verticalLargeTabletBreak rowgap_l3'}>
                {children}
            </section>
        </section>
    )
}