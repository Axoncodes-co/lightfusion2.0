
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
import dynamic from 'next/dynamic'
import Header from '../../fragments/Header'
import Head from 'next/head'
import fetchup from '../../lib/fetch'
import MetaTags from '../../axg-react/MetaTags'
import Footer from '../../fragments/Footer'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function Notfound({categories}) {
    const headsclasses = 'secondary_color font_l2_min weight_l6 fitWidth'
    const itemsclasses = 'secondary_color font_l2_max nomargin weight_l4 fitWidth tertiary_color_hover'

    return (<>
		<Head>
			<title>404 - Homa Pilot</title>
			<MetaTags
				title={'Online Aviation Courses and Exams By Homa Pilot'}
				description={'Homa Pilot offers aviation and flight training courses such as PPL, CPL, IR, and ATPL. We also offer online piloting exams.'}
				href={'https://homapilot.com/contact'}
				ico={'/ico.png'}
            />
		</Head>
        <Header categories={categories} />
		<section className={'subcontainer'}>
			<div style={{
				filter: 'brightness(0.5)',
				background: 'url(/1.jpg) center no-repeat',
				backgroundSize: 'cover',
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}></div>
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={'404'} />
		</section>
		<section className={'primary_bg container vertical verticalTabletBreak'} style={{minHeight: '300px'}}>
			<Text customclasses={'center'} textclasses={'textcenter secondary_color font_l6 weight_l3 secondary_font'} text={'Looks like you are lost, you can go back or hump to <a href="/">Home</a> page or choose from the list below'} />
            <section className={'subcontainer horizontal topy center'}>
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
		<Footer categories={categories} />
		<Axg />
    </>)
}

export const getStaticProps = async () => {
	return fetchup()
	.then(categories => ({
		props: {categories}
	}))
}