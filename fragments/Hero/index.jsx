
import Text from "../../builtin-axg/text/v2"

export default function Hero() {

    return (
        <section className={`widePadding_l6 container vertical verticalLargeTabletBreak`} style={{paddingRight: '0'}}>
            <section className={'subcontainer centerOnTablet'}>
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
                <section className={'fitWidth allLefty centerOnTablet horizontal horizontalTabletBreak padding_l3 subcontainer widePadding_l0'}>
                    <Text
                        text={'Start Learning'}
                        height={'48px'}
                        plane={'1'}
                        link={'/general'}
                        innercustomclasses={'fitWidth'}
                        textclasses={'round_l3 secondary_bg padding_l4 widePadding_l3 transition primary_color secondary_font font_l4'}
                    />
                    <Text
                        text={'Start Building'}
                        customclasses={'nohovershadow'}
                        innercustomclasses={'fitWidth'}
                        height={'48px'}
                        plane={'1'}
                        link={'/diy'}
                        textclasses={'padding_l4 widePadding_l3 round_l3 transition secondary_bg_hover primary_color font_l4'}
                    />
                </section>
            </section>
        </section>
    )
}