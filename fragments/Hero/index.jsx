
import dynamic from "next/dynamic"

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})

export default function Hero() {

    return (
        <section className={`widePadding_l6 container vertical verticalLargeTabletBreak`} style={{paddingRight: '0'}}>
            <section className={'subcontainer'}>
                <Text
                    text={'HOMA PILOT'}
                    textclasses={`nomargin wide primary_color secondary_font font_l8 textleft textcenteronTablet weight_l3`}
                    subtext={'Online Free Flight Training Courses, Pilot Exams and CFI Tools'}
                    subtextclasses={`primary_color font_l4 lato textleft textcenteronTablet nomargin weight_l4`}
                    subtextalign={'centerOnTablet'}
                    innercustomclasses={'norowgapOnMobile nocolgap vertical verticalOnTablet'}
                    orderdirection={'horizontal'}
                    customclasses={'wide centerOnTablet'}
                />
                <section className={'allLefty centerOnTablet horizontal horizontalTabletBreak padding_l3 subcontainer widePadding_l0'}>
                    <Button
                        text={'Start Learning'}
                        innerclasses={'padding_l4 widePadding_l3 round_l3'}
                        bg={'var(--secondaryColor)'}
                        height={'48px'}
                        plane={'1'}
                        link={'/general'}
                        textclasses={'transition primary_color secondary_font font_l4'}
                    />
                    <Button
                        text={'Start Building'}
                        customclasses={'nohovershadow'}
                        innerclasses={'padding_l4 widePadding_l3 round_l3'}
                        bg={'#0000'}
                        height={'48px'}
                        plane={'1'}
                        link={'/diy'}
                        textclasses={'transition primary_color font_l4'}
                        hoverbg={'var(--secondaryColor)'}
                    />
                </section>
            </section>
        </section>
    )
}