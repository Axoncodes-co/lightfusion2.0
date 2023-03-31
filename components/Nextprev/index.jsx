import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Nextprev({
    single,
    nextlink,
    prevlink
}) {

    const prev = prevlink ? <Text
        text={'Previous'}
        link={prevlink}
        icon={JSON.stringify({
            svg: '<svg class="primary_fill" xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 48 48" height="20"><path d="M18.6 42.6 1.05 25.05q-.25-.25-.35-.5Q.6 24.3.6 24q0-.3.1-.55.1-.25.35-.5L18.6 5.4q.55-.55 1.4-.55.85 0 1.4.55.6.6.6 1.425 0 .825-.6 1.425L5.65 24 21.4 39.75q.6.6.575 1.425-.025.825-.575 1.375-.6.6-1.425.6-.825 0-1.375-.55Z"/></svg>'
        })}
        textclasses={'nomargin font_l4 weight_l5 widePadding_l1 primary_color'}
        customclasses={'fitWidth secondary_bg round_l2 padding'}
    /> : ''

    const next = nextlink ? <Text
        text={'Next'}
        link={nextlink}
        icon={JSON.stringify({
            svg: '<svg class="primary_fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="20"><path d="M13.8 42.45q-.55-.6-.575-1.4-.025-.8.575-1.4L29.55 23.9 13.8 8.15q-.55-.55-.575-1.375-.025-.825.575-1.425.55-.6 1.375-.625Q16 4.7 16.6 5.3l17.55 17.55q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5L16.6 42.5q-.55.55-1.375.55t-1.425-.6Z"/></svg>'
        })}
        textclasses={'nomargin font_l4 weight_l5 widePadding_l1 primary_color'}
        customclasses={'rtl fitWidth secondary_bg round_l2 padding'}
    /> : ''

    if (single) {
        if (prevlink) return prev
        else if (nextlink) return next
    }

    return (<section className={'subcontainer horizontal horizontalTabletBreak'}> 
        {prev}
        {next}
    </section>)
}