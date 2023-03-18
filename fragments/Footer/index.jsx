
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Newssubscriber from '../Newssubscriber'

const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})

export default function Footer() {

    const headsclasses = 'primary_color font_l2_min weight_l6 fitWidth'
    const itemsclasses = 'primary_color font_l2_max nomargin weight_l4 fitWidth'

    return (<footer className={'container tertiary_bg vertical'}>
        <Newssubscriber />
        <section className={'subcontainer horizontal allLefty verticalTabletBreak'}>
            <section className={'subcontainer centerOnTablet'}>
                <Text
                    inlinestyle={'width: 90%'}
                    textclasses={'weight_l4 font_l3 textcenteronTablet primary_color'}
                    text={'Homa Pilot was founded in 2020 and the purpose of this complex is to provide digital aviation and piloting courses for free and online so that all students of piloting and aviation.'}
                />
            </section>
            <section className={'subcontainer horizontal topy center'}>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Categories'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        <Text text={'General'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'ATPL'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'DIY'} link={'/'} textclasses={itemsclasses} />
                    </div>
                </section>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Subjects'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        <Text text={'Subjects One'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects Two'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects Three'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects Four'} link={'/'} textclasses={itemsclasses} />
                    </div>
                </section>
                <section className={'subcontainer fitWidth topy'}>
                    <Text text={'Main Sectors'} textclasses={headsclasses} />
                    <div className={'subcontainer vertical'}>
                        <Text text={'Subjects'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects'} link={'/'} textclasses={itemsclasses} />
                        <Text text={'Subjects'} link={'/'} textclasses={itemsclasses} />
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
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/facebook.svg'} width={20} height={20} />
                </Link>
                <Link href={'https://www.instagram.com/homapilot/'}>
                    <Image alt={'socialmedia'} src={'/instagram.svg'} width={20} height={20} />
                </Link>
            </div>
            <Text customclasses={'primary_color righty centerOnMobile'}>
                by <Link href={'https://axoncodes.com'} className={'secondary_color'} >Axoncodes</Link>
            </Text>
        </section>
    </footer>)
}