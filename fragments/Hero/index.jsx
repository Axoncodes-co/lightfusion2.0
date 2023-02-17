
import dynamic from "next/dynamic";

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})
// const LessonBox = dynamic(() => import('../../components/LessonBox'), {ssr: false})
import LessonBox from '../../components/LessonBox'

export default function Hero() {
    return (
        <section className={'verticalLargeTabletBreak container horizontal'}>
            <section className={'subcontainer'}>
                <Text
                    dev={'staging'}
                    text={'A LARGE TEXT SHALL GO HERE AS TITLE TO WEBSITE'}
                    textcolor={'#565969'}
                    textfontsize={'var(--l9-text-fontSize)'}
                    textclasses={`textleft textcenteronTablet nomargin weight_l3`}
                    subtext={'And some description here shall be written by Sir Amir ollah Amiri'}
                    subtextclasses={`textleft textcenteronTablet nomargin weight_l5`}
                    subtextcolor={'#001659'}
                    subtextfontsize={'var(--l5-text-fontSize)'}
                    innercustomclasses={'norowgapOnMobile nocolgap vertical verticalOnTablet'}
                    orderdirection={'horizontal'}
                    customclasses={'fitWidth'}
                    subtextalign={'centerOnTablet'}
                />
                <section className={'centerOnTablet horizontal horizontalTabletBreak lefty padding_l3 subcontainer widePadding_l0'}>
                    <Button
                        text={'Start Learn'}
                        innerclasses={'padding_l0 widePadding_l3 round_l1'}
                        bg={'var(--primaryColor)'}
                        color={'#fff'}
                        height={'48px'}
                        plane={'1'}
                        link={'/shop'}
                        textfontsize={'var(--l6-text-fontSize)'}
                    />
                    <Button
                        text={'Start Building'}
                        innerclasses={'padding_l0 widePadding_l3 round_l1'}
                        bg={'#0000)'}
                        color={'var(--primaryTextColor)'}
                        height={'48px'}
                        plane={'1'}
                        link={'/shop'}
                        textfontsize={'var(--l6-text-fontSize)'}
                    />
                </section>
            </section>
            <section className={'subcontainer horizontal'}>
                <LessonBox />
                <LessonBox />
                <LessonBox />
                <LessonBox />
                <LessonBox />
            </section>
        </section>
    )
}