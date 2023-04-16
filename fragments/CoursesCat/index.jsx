
import CategoryBox from '../../components/CategoryBox'

export default function CoursesCat({ categories }) {
    return (
        <section style={{paddingLeft: '0'}} className={'widePadding_l6 centerMarge centerMargen container horizontal nocolgap norowgap verticalTabletBreak wide'}>
            {categories.map(({
                title,
                svg,
                slug,
                courses_count,
            }, key) => <CategoryBox
                key={key}
                title={title}
                svg={svg}
                link={slug}
                courses_count={courses_count}
            />)}
        </section>
    )
}