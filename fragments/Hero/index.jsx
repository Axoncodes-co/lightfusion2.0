
import Text from "../../builtin-axg/text/v2"

export default function Hero({
    hero_title,
    hero_description,
    hero_button1_title,
    hero_button1_slug,
    hero_button2_title,
    hero_button2_slug,
}) {

    return (
        <section className={`widePadding_l6 container vertical verticalLargeTabletBreak`} style={{paddingRight: '0'}}>
            <section className={'subcontainer centerOnTablet'}>
                <h1 className="subcontainer nomargin wide primary_color secondary_font font_l8 textleft textcenteronTablet weight_l3" dangerouslySetInnerHTML={{__html: hero_title}}></h1>
                {/* <p className="subcontainer primary_color font_l4 lato textleft textcenteronTablet nomargin weight_l4" dangerouslySetInnerHTML={{__html: hero_description}}></p> */}
                <p className="subcontainer primary_color font_l4 lato textleft textcenteronTablet nomargin weight_l4">{hero_description}</p>
                <section className={'fitWidth allLefty centerOnTablet horizontal horizontalTabletBreak padding_l3 subcontainer widePadding_l0'}>
                    <Text
                        text={hero_button1_title}
                        height={'48px'}
                        plane={'1'}
                        link={hero_button1_slug}
                        innercustomclasses={'fitWidth'}
                        textclasses={'round_l3 secondary_bg padding_l4 widePadding_l3 transition primary_color secondary_font font_l4'}
                    />
                    <Text
                        text={hero_button2_title}
                        customclasses={'nohovershadow'}
                        innercustomclasses={'fitWidth'}
                        height={'48px'}
                        plane={'1'}
                        link={hero_button2_slug}
                        textclasses={'padding_l4 widePadding_l3 round_l3 transition secondary_bg_hover primary_color font_l4'}
                    />
                </section>
            </section>
        </section>
    )
}