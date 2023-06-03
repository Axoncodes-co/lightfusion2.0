
import Image from 'next/image'
import Link from 'next/link'
import Newssubscriber from '../Newssubscriber'
import Text from '../../builtin-axg/text/v2'

export default function Footer({ footerData, categories }) {

    const headsclasses = 'primary_color font_l2_min weight_l6 fitWidth'
    const itemsclasses = 'primary_color font_l2_max nomargin weight_l4 fitWidth tertiary_color_hover'

    return (<footer className={'container tertiary_bg vertical'}>
        <Newssubscriber />
        <section className={'subcontainer horizontal allLefty verticalTabletBreak'}>
            <section className={'subcontainer centerOnTablet'}>
                <Text
                    inlinestyle={{width: '90%'}}
                    textclasses={'weight_l4 font_l3 textcenteronTablet primary_color'}
                    text={footerData.attributes.short_description}
                />
            </section>
            <section className={'centerOnTablet horizontal horizontalTabletBreak righty subcontainer topy'}>
                {footerData.attributes.Lists.map((list, key) => (
                    <section key={key} className={'subcontainer fitWidth topy'}>
                        <Text text={'Categories'} textclasses={headsclasses} />
                        <div className={'subcontainer vertical'}>
                            {list.Link.map((link, key) => <Text key={key} text={link.Name} link={`/${link.Link}`} textclasses={itemsclasses} />)}
                        </div>
                    </section>
                ))}
            </section>
        </section>
        <div className={'round_l5'} style={{backgroundColor: '#000000d4', width: '100%', height: '1px', margin: '22px 0'}} />
        <section className={'subcontainer horizontal spread'}>
            {!footerData.attributes.socialmedia.Link ? '' : (
                <div className={'centerOnTablet fitWidth horizontal horizontalTabletBreak lefty subcontainer wideonTablet'}>
                    {footerData.attributes.socialmedia.Link.map((item, key) => (
                        <Link key={key} href={item.Link}>
                            <Image alt={item.Name} src={`/${item.Name}.svg`} width={20} height={20} />
                        </Link>
                    ))}
                </div>
            )}
            <p className={'centerOnTablet font_l2_min primary_color righty weight_l3 wideonTablet'} dangerouslySetInnerHTML={{__html:footerData.attributes.socket}}></p>
        </section>
    </footer>)
}