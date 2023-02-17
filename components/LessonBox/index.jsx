import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})

export default function LessonBox() {
    return (
        <section className={'subcontainer primary_bg'} style={{height: '100px'}}>
        </section>
    )
}