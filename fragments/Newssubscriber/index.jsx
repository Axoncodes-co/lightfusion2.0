
import dynamic from 'next/dynamic'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Newssubscriber() {
    return (<section className={'subcontainer horizontal'}>
        <Text
            text={'Get notified when we post'}
            textclasses={'primary_color nomargin font_l5_max weight_l7'}
            subtext={'Stay up to date with the latest educations and articles'}
            subtextclasses={'primary_color nomargin font_l2 weight_l5'}
            customclasses={'centerOnTablet'}
        />
        <section>
            {/* TODO: Connect to DB */}
            <form className={'subcontainer horizontal horizontalTabletBreak'}>
                <input
                    placeholder={'Enter your email'}
                    className={'primary_color padding_l2 round_l2 tertiary_bg'}
                    style={{border: '1px solid var(--primaryColor)', width: '25vw', minWidth: '140px'}}
                />
                <input type="submit" value={'Subscribe'} className={'primary_color padding_l2 round_l2 secondary_bg'} style={{border: '1px solid var(--secondaryColor)', cursor: 'pointer'}} />
            </form>
        </section>
    </section>)
}