
import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Posts({link, title, svg, children}) {
    return (
        <section className={'container vertical'}>
            <section className={'subcontainer horizontal'}>
                <Text
                    text={title}
                    textclasses={'font_l4 nomargin weight_l4'}
                    customclasses={'centerOnMobile allLefty horizontal'}
                    icon={JSON.stringify({svg})}
                />

                <Text
                    text={'View All'}
                    link={link}
                    textclasses={'font_l2 nomargin weight_l4'}
                    customclasses={'centerOnMobile righty'}
                />
            </section>
            <section className={'subcontainer horizontal verticalLargeTabletBreak'}>
                {children}
            </section>
        </section>
    )
}