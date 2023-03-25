
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
import dynamic from 'next/dynamic'
import Header from '../../fragments/Header'
import Head from 'next/head'
import fetchup from '../../lib/fetch'
import MetaTags from '../../axg-react/MetaTags'
import Footer from '../../fragments/Footer'
const Axg = dynamic(() => import('../../axg-react/Run'), {ssr: false})

export default function About({categories}) {
    return (<>
		<Head>
			<title>About Homa Pilot</title>
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
			<Text customclasses={'center'} textclasses={'primary_color font_l9 weight_l4 secondary_font'} text={'About Homa Pilot'} />
		</section>
		<section className={'primary_bg container vertical verticalTabletBreak'} style={{minHeight: '300px'}}>
			<Text textclasses={'font_l4 weight_l3'} text={'Homa Pilot Complex was founded in 2020 by pilot Benyamin Amiri. The purpose of this complex is to provide aviation and piloting courses that are available online for free to pilot students and all those who are interested in this industry.'} />
			<Text textclasses={'font_l4 weight_l3'} text={'At <a href="/">Homa Pilot</a>, an attempt has been made to provide all courses with a high level of educational standard, which will lead to better student learning. In addition, there is an exam at the end of each course for the students to assess what they have learned.'} />
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