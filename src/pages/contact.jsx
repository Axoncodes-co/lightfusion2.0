
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
import dynamic from 'next/dynamic'
import Header from '../../fragments/Header'
import Head from 'next/head'
import fetchup from '../../lib/fetch'
import MetaTags from '../../axg-react/MetaTags'
import Footer from '../../fragments/Footer'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function Contact({categories}) {
    return (<>
		<Head>
			<title>Contact Homa Pilot</title>
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
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={'Contact Homa Pilot'} />
		</section>
		<section className={'primary_bg container horizontal topy spread verticalTabletBreak'} style={{minHeight: '300px'}}>
			<div className={'subcontainer wide centerOnTablet'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact Homa Pilot'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:info@homapilot.com'} text={'info@homapilot.com'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:homapilot@gmail.com'} text={'homapilot@gmail.com'} />
			</div>
			<div className={'subcontainer wide'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact the support team'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:support@homapilot.com'} text={'support@homapilot.com'} />
			</div>
			<div className={'subcontainer wide'}>
				<Text customclasses={'centerOnTablet'} textclasses={'secondary_color nomargin font_l4 weight_l3'} text={'Contact the advertising department'} />
				<Text customclasses={'centerOnTablet'} textclasses={'nomargin font_l3 weight_l3'} link={'mailto:ad@homapilot.com'} text={'ad@homapilot.com'} />
			</div>
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