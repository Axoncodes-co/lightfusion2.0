
import style from './style.module.css'
import dynamic from 'next/dynamic'
import CourseBox from '../../components/CourseBox'
import Accordion_head from '../../axg-react/Accordion2/head'
import Accordion_body from '../../axg-react/Accordion2/body'
const Accordion = dynamic(() => import('../../axg-react/Accordion2/index'), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function CoursesCat({categories}) {
    // TODO: Fit the size of the accordion head
    return (
        <section className={'norowgap centerMarge centerMargen container horizontal verticalTabletBreak nocolgap wide'}>
            {categories.map((category, key) => (
                <Accordion
                    key={key}
                    customclasses={`${style.cover} horizontal verticalTabletBreak fitWidth wideonTablet`}
                    groupname={'popularcourse'}
                    active={key == 0 ? 'active' : ''}
                >
                    <Accordion_head
                        customclasses={'fitWidth wideonTablet'}
                        innerclasses={'vertical horizontalTabletBreak spread round_l3'}
                        bg={'var(--primaryColor)'}
                    >
                        <Text
                            text={category.title}
                            svg={category.svg}
                            customclasses={'fitWidthOnTablet fitminWidth textcenter center padding_l3 vertical horizontalTabletBreak'}
                            textclasses={'tertiary_color nomargin font_l3_min weight_l6'}
                        />
                        <section className={'subcontainer center horizontal padding_l3 verticalTabletBreak fitminWidth'}>
                            <div className={'subcontainer horizontal tooltip_parent center'}>
                                <Text text={'3'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                                <Text text={'Courses'} customclasses={'tooltip_content'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                            </div>
                            <div className={'subcontainer horizontal tooltip_parent'}>
                                <Text text={'31'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                                <Text text={'Lessons'} customclasses={'tooltip_content lefty'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                            </div>
                            <div className={'subcontainer horizontal tooltip_parent'}>
                                <Text text={'131'} customclasses={'center'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                                <Text text={'Hours'} customclasses={'tooltip_content lefty'} textclasses={'tertiary_color nomargin font_l1 weight_l6'} />
                            </div>
                        </section>
                    </Accordion_head>
                    <Accordion_body
                        customclasses={'padding_l0'}
                        innercustomclasses={'subcontainer vertical nocolgap'}
                        dev={'staging'}
                    >
                        {category.courses.map(({
                            svg,
                            title,
                            description,
                            link,
                            count,
                            courseAttitude
                        }, key) => <CourseBox
                                key={key}
                                svg={svg}
                                title={title}
                                description={description}
                                link={link}
                                count={count}
                                courseAttitude={courseAttitude}
                            />
                        )}
                    </Accordion_body>
                </Accordion>
            ))}
        </section>
    )
}