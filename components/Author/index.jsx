
import style from './style.module.css'
import Text from '../../builtin-axg/text/v2'

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
            icon={{
                plane: true,
                isfont: '0',
                src: avatar_url,
                customclasses: `${style.avatar} round`
            }}
        />
    )
}