
import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Navbar({data}) {
    return (
        <nav className={'subcontainer horizontal'}>
            {data
                .map(category => category.courses
                    .map(course => <Text text={course.title} customclasses={'fitWidth'} textclasses={'fitWidth widePadding_l1 weight_l3 font_l3'} />)
                )
            }
        </nav>
    )
}