import dynamic from 'next/dynamic'
import { useState } from 'react'
const Searchbar = dynamic(() => import('../../axg-react/Searchbar3'), {ssr: false})
const Logo = dynamic(() => import('../../axg-react/Logo'), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text'), {ssr: false})
const Menu = dynamic(() => import('../../axg-react/Menu'), {ssr: false})
const DropdownBody = dynamic(() => import('../../axg-react/DropdownBody'), {ssr: false})

export default function Header() {

  const [menuGroup, setMenuGroup] = useState({
    headTitlecolor: '#ededed',
    height: '50',
    color: 'var(--primaryTextColor)',
    colorHover: '#fff',
    activeBackground: 'var(--primaryColor)',
    headBackground: '#0000',
    headBackgroundHover: '#575757',
    title: 'Courses',
    background: '#ededed',
    subOpening: 'sub',
    subTrigger: 'click',
    dropdownid: 'mainHeaderGroup',
  })
  const [menuItems, setMenuItems] = useState([
    {
      targetLocator: 'shoplocator',
      structure: 'mega singletab',
      name: 'General',
      color: 'var(--primaryColor)',
      activeColor: 'var(--tertiaryTextColor)',
      activeBg: 'var(--primaryColor)',
      subtrigger: 'click',
      subopening: 'sub',
      background: 'var(--primaryColor)',
      dir: 'rtl',
      exit: '1',
    },{
      targetLocator: 'shoplocator',
      structure: 'mega singletab',
      name: 'ATPL',
      color: 'var(--primaryColor)',
      activeColor: 'var(--tertiaryTextColor)',
      activeBg: 'var(--primaryColor)',
      subtrigger: 'click',
      subopening: 'sub',
      background: 'var(--primaryColor)',
      dir: 'rtl',
      exit: '1',
    },{
      targetLocator: 'shoplocator',
      structure: 'mega singletab',
      name: 'DIY',
      color: 'var(--primaryColor)',
      activeColor: 'var(--tertiaryTextColor)',
      activeBg: 'var(--primaryColor)',
      subtrigger: 'click',
      subopening: 'sub',
      background: 'var(--primaryColor)',
      dir: 'rtl',
      exit: '1',
    },
  ])
  return (
    <>
    <section className={'container horizontal horizontalTabletBreak padding_l0 widePadding_l1'}>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        {/* TODO: Setup alt small logo or make it dynamic */}
        <Logo
          src={'/logo.png'}
          width={130}
          height={50}
        />
        <Menu
          menuGroup={menuGroup}
          menuItems={menuItems}
        />
      </section>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <Searchbar
          id={'main_searchbar'}
          dev={'staging'}
          name={'main_searchbar'}
          inputcustomclasses={'font_l1 wide padding_l3 noborder round_l3'}
          customclasses={'wide'}
          bg={'#c1c1c1a3'}
          color={'#000'}
          placeholder={'Search whatever the fuck you need...'}
          queryid={'mainsearchquery'}
          collapseonmobile={'1'}
          labelclasses={'subcontainer lefty hoversearchcoverlabel'}
          inputcovercustomclasses={'subcontainer vertical'}
          reslistcustomclasses={'boxshadow darker rtl'}
          outformclasses={'searchbarsizes'}
          searchquerynames={['name1', 'name2']}
          searchquerylinks={['link1', 'link2']}
        />
        <div id={'continue_to_article'}>
          <Text
            text={'Continue to Article'}
            textcolor={'#565969'}
            textfontsize={'var(--l1-text-fontSize)'}
            textclasses={`nomargin`}
            subtext={'the article link'}
            subtextclasses={`nomargin weight_l9`}
            subtextcolor={'#001659'}
            subtextfontsize={'var(--l3-text-fontSize)'}
            innercustomclasses={'nocolgap vertical verticalOnTablet'}
            orderdirection={'horizontal'}
            customclasses={'topy fitWidth'}
            link={'/'}
          />
        </div>
      </section>
    </section>
    <section className="ax_elements" nomain="true">
      {menuItems.map((item, key) => (
        <DropdownBody
          key={key}
          mode={'dropdown_body_v4'}
          dev={"staging"}
          exit={item.exit}
          headTitle={item.headTitle}
          headTitlecolor={item.headTitlecolor}
          height={item.height}
          color={item.color}
          colorHover={item.colorHover}
          activeBackground={item.activeBackground}
          headBackground={item.headBackground}
          headBackgroundHover={item.headBackgroundHover}
          structure={item.structure}
          fontsize={item.fontsize}
          title={item.title}
          background={item.background}
          targetLocator={item.targetLocator}
          subOpening={item.subOpening}
          options={JSON.stringify(item.options)}
          optionsApi={item.optionsApi}
          dropdownid={key}
        />
      ))}
    </section>
  </>
  )
}
