
import CategoryBox from '../../components/CategoryBox'

export default function CoursesCat({categories}) {
    return (
        <section style={{paddingLeft: '0'}} className={'widePadding_l6 centerMarge centerMargen container horizontal nocolgap norowgap verticalTabletBreak wide'}>
            {categories.map((category, key) => <CategoryBox
                key={key}
                title={category.title}
                svg={category.svg}
                link={category.slug}
                courses_count={category.courses.length}
            />)}
        </section>
    )
}