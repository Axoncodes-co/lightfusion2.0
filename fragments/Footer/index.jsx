
import Image from 'next/image'
import Link from 'next/link'
import Newssubscriber from '../Newssubscriber'
import style from './style.module.css'
import Text from '../../builtin-axg/text/v2'
import { useEffect } from 'react'

export default function Footer({categories}) {

    useEffect(() => {
        dropdownV5Handler()
    })

    const headsclasses = 'primary_color font_l2_min weight_l6 fitWidth'
    const itemsclasses = 'primary_color font_l2_max nomargin weight_l4 fitWidth tertiary_color_hover'

    return (<footer className={'container tertiary_bg vertical'}>
        <Newssubscriber />
        <section className={'subcontainer horizontal allLefty verticalTabletBreak'}>
            <section className={'subcontainer centerOnTablet'}>
                <Text
                    inlinestyle={{width: '90%'}}
                    textclasses={'weight_l4 font_l3 textcenteronTablet primary_color'}
                    text={'Homa Pilot was founded in 2020 and the purpose of this complex is to provide digital aviation and piloting courses for free and online so that all students of piloting and aviation.'}
                />
            </section>
            <section className={'subcontainer horizontal topy righty'}>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Categories'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        {categories.map((category, key) => <Text key={key} text={category.title} link={`/${category.slug}`} textclasses={itemsclasses} />)}
                    </div>
                </section>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Main Sectors'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        <Text text={'Home'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Contact'} link={'/contact'} textclasses={itemsclasses} />
                        <Text text={'About'} link={'/about'} textclasses={itemsclasses} />
                    </div>
                </section>
            </section>
        </section>
        <div className={'round_l5'} style={{backgroundColor: '#000000d4', width: '100%', height: '1px', margin: '22px 0'}} />
        <section className={'subcontainer horizontal spread'}>
            <div className={'subcontainer horizontal horizontalTabletBreak fitWidth lefty'}>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.facebook.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/facebook.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://twitter.com/HomaPilot'}>
                    <Image alt={'socialmedia'} src={'/twitter.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.linkedin.com/company/homapilot'}>
                    <Image alt={'socialmedia'} src={'/linkedin.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.youtube.com/channel/UCp6GlZFBs0lRyrsXZa8hVGA/'}>
                    <Image alt={'socialmedia'} src={'/youtube.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.pinterest.com/homapilot'}>
                    <Image alt={'socialmedia'} src={'/pinterest.svg'} width={20} height={20} />
                </Link>
                <Link href={'mailto:info@homapilot.com'}>
                    <Image alt={'socialmedia'} src={'/email.svg'} width={20} height={20} />
                </Link>
            </div>
            <p className={'font_l2_min weight_l3 primary_color righty centerOnMobile'}>© 2020–2023 HomaPilot LLC & <a target="_blank" href="https://axoncodes.com" className="tertiary_color">Axoncodes</a> - Made with <svg className={style.hearticon} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" fill="#AD1457"><path d="m439 900-53-49Q262 736 171 631.5T80 413q0-90 60.5-150.5T290 202q51 0 101 24.5t89 80.5q44-56 91-80.5t99-24.5q89 0 149.5 60.5T880 413q0 114-91 218.5T574 851l-53 49q-17 16-41 16t-41-16Z"/></svg> in Arizona</p>
        </section>
    </footer>)
}