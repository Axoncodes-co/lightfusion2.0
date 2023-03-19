
import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Navbar({data, current_slug}) {
    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 4,
            }}
            className={'topy subcontainer horizontal horizontalTabletBreak tertiary_bg colgap_l0'}
        >
            <Text
                link={`/`}
                customclasses={'tertiary_fill_hover pointer fitWidth padding_l1'}
                icon={JSON.stringify({
                    svg: '<svg fill="#e2e2e2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="20"><path d="M11 42q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42h-9V28h-8v14Z"/></svg>',
                })}
                textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`}
            />
            <section
                style={{overflowX: 'scroll'}}
                className={'subcontainer horizontal horizontalTabletBreak tertiary_bg colgap_l0'}
            >
                {data
                    .map(category => category.courses
                        .map((course, key) => 
                            <Text
                                key={key}
                                customclasses={'fitWidth'}
                                text={course.title}
                                link={`/${category.slug}/${course.slug}`}
                                textclasses={`
                                    ${current_slug == course.slug ? 'secondary_bg secondary_color' : 'primary_color tertiary_color_hover'}
                                    transition fitWidth padding_l1 weight_l3 font_l2
                                `}
                            />
                        )
                    )
                }
            </section>
            {/* Dark mode switch */}
            {/* light */}
            <Text
                dev={'staging'}
                onClick={'toggletheme()'}
                id={'lightmode'}
                icon={JSON.stringify({
                    svg: '<svg fill="#e2e2e2" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>',
                })}
                customclasses={'tertiary_fill_hover pointer hidesublighttheme padding_l1 fitWidth'}
                textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`}
            />
            {/* dark */}
            <Text
                dev={'staging'}
                onClick={'toggletheme()'}
                id={'darkmode'}
                icon={JSON.stringify({
                    svg: '<svg fill="#e2e2e2" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-6.75 3.975-11.45Q13.95 7.85 20.4 6.5q2.05-.4 2.8.7t-.05 3q-.45 1.15-.7 2.35-.25 1.2-.25 2.45 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q1.25 0 2.425-.225 1.175-.225 2.275-.625 2.15-.8 3.2.075 1.05.875.55 2.975-1.35 6.05-6.05 10.025Q30.7 42 24 42Z"/></svg>',
                })}
                customclasses={'tertiary_fill_hover pointer hidesubdarktheme padding_l1 fitWidth'}
                textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`}
            />

            {/* TRANSLATOR */}
            {/* <Text
                text={'Translate'}
                link={`/`}
                customclasses={'fitWidth'}
                textclasses={`primary_color secondary_color_hover transition fitWidth padding_l1 weight_l3 font_l2`}
            /> */}
        </nav>
    )
}