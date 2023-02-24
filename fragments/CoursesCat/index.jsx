
import style from './style.module.css'
import dynamic from 'next/dynamic'
import CourseBox from '../../components/CourseBox'
import Accordion_head from '../../axg-react/Accordion2/head'
import Accordion_body from '../../axg-react/Accordion2/body'
const Accordion = dynamic(() => import('../../axg-react/Accordion2/index'), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function CoursesCat({categories}) {

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
                        innerclasses={`${style.head} straight vertical horizontalTabletBreak spread round_l3`}
                        bg={'var(--primaryColor)'}
                        activecolor={'red'}
                        activemode={'class'}
                        dev={'staging'}
                    >
                        <section className={'subcontainer vertical center'} style={{height: '100%'}}>
                            <Text
                                text={category.title}
                                svg={category.svg}
                                customclasses={`${style.title} fitWidthOnTablet fitminWidth textcenter center padding_l5 vertical horizontalTabletBreak`}
                                textclasses={'gloock tertiary_color nomargin font_l6 weight_l6'}
                            />
                        </section>
                        <section className={'subcontainer vertical horizontalTabletBreak fitWidth'}>
                            <Text
                                text={'Explore'}
                                customclasses={'fitWidthOnTablet fitminWidth textcenter center padding_l0 vertical horizontalTabletBreak'}
                                textclasses={'tertiary_color nomargin font_l1 weight_l4'}
                                link={category.link}
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
                        </section>
                    </Accordion_head>
                    <Accordion_body
                        customclasses={'padding_l0'}
                        innercustomclasses={'center subcontainer vertical horizontalTabletBreak spread nocolgap'}
                        dev={'staging'}
                    >
                        {category.courses.map(({
                            svg,
                            title,
                            description,
                            link,
                            lessons,
                            hours,
                            paid,
                            level,
                            courseAttitude
                        }, key) => <CourseBox
                                key={key}
                                svg={svg}
                                title={title}
                                paid={paid}
                                level={level}
                                description={description}
                                link={link}
                                lessons={lessons}
                                hours={hours}
                                courseAttitude={courseAttitude}
                            />
                        )}
                    </Accordion_body>
                </Accordion>
            ))}
        </section>
    )
}