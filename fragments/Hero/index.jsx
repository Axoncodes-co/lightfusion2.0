
import dynamic from "next/dynamic"

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})

export default function Hero() {

    return (
        <section className={`container vertical verticalLargeTabletBreak`}>
            <section className={'subcontainer'}>
                <Text
                    text={'A LARGE TEXT SHALL GO HERE AS TITLE TO WEBSITE'}
                    textclasses={`primary_color font_l8 textleft textcenteronTablet nomargin weight_l3`}
                    subtext={'And some description here shall be written by Sir Amir ollah Amiri'}
                    subtextclasses={`primary_color font_l4 lato textleft textcenteronTablet nomargin weight_l4`}
                    innercustomclasses={'norowgapOnMobile nocolgap vertical verticalOnTablet'}
                    orderdirection={'horizontal'}
                    customclasses={'fitWidth'}
                    subtextalign={'centerOnTablet'}
                />
                <section className={'allLefty centerOnTablet horizontal horizontalTabletBreak padding_l3 subcontainer widePadding_l0'}>
                    <Button
                        text={'Start Learn'}
                        innerclasses={'padding_l4 widePadding_l3 round_l3'}
                        bg={'var(--primaryColor)'}
                        height={'48px'}
                        plane={'1'}
                        link={'/shop'}
                        textclasses={'transition tertiary_color secondary_font font_l4'}
                        hovercolor={'var(--primaryTextColor)'}
                        hoverbg={'var(--secondaryColor)'}
                    />
                    <Button
                        text={'Start Building'}
                        customclasses={'nohovershadow'}
                        innerclasses={'padding_l4 widePadding_l3 round_l3'}
                        bg={'#0000'}
                        height={'48px'}
                        plane={'1'}
                        link={'/shop'}
                        textclasses={'transition primary_color font_l4'}
                        hovercolor={'var(--primaryTextColor)'}
                        hoverbg={'var(--secondaryColor)'}
                    />
                </section>
            </section>
        </section>
    )
}