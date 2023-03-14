
import CategoryBox from '../../components/CategoryBox'

export default function CoursesCat({categories}) {
    return (
        <section className={'norowgap centerMarge centerMargen container horizontal verticalTabletBreak nocolgap wide'}>
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