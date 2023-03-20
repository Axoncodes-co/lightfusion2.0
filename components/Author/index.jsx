
import dynamic from 'next/dynamic'
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
import style from './style.module.css'

export default function Author({
    name, avatar_url, date, color
}) {
    return (
        <Text
            text={name}
            textclasses={`${color} font_l3 weight_l3 nomargin`}
            subtext={date}
            subtextclasses={`${color} font_l2 weight_l2 nomargin`}
            customclasses={'fitHeight colgap_l2'}
            innercustomclasses={'rowgap_l0'}
            icon={JSON.stringify({
                dev: 'stagin',
                plane: true,
                isfont: '0',
                src: avatar_url,
                customclasses: `${style.avatar} round`
            })}
        />
    )
}