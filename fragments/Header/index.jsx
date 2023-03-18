import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
const Searchbar = dynamic(() => import('../../axg-react/Searchbar3'), {ssr: false})
const Logo = dynamic(() => import('../../axg-react/Logo'), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Menu = dynamic(() => import('../../axg-react/Menu'), {ssr: false})
const DropdownBody = dynamic(() => import('../../axg-react/DropdownBody'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})
export default function Header({ categories }) {

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
      targetLocator: 'courseslocator',
      structure: 'mega singletab',
      name: 'Courses',
      color: 'var(--primaryTextColor)',
      activeColor: 'var(--primaryColor)',
      activeBg: 'var(--secondaryColor)',
      subtrigger: 'click',
      subopening: 'sub',
      background: 'var(--tertiaryColor)',
      dir: 'rtl',
      exit: '1',
      // options: categories.map(category => ({
      //     title: category.title,
      //     url: '/shop/tehran-cement',
      //     level: 'undertab',
      //     color: 'var(--secondaryColor)',
      //     fontsize: 'var(--l7-text-fontSize)',
      //     dir: 'rtl',
      //     content: category.courses.map(course => ({
      //       title: course.title,
      //       url: '/shop/tehran-cement',
      //       level: 'undertab',
      //       color: 'var(--secondaryColor)',
      //       fontsize: 'var(--l7-text-fontSize)',
      //       dir: 'rtl',
      //     }))
      // }))
    }
  ])
  return (
    <>
    <section
      style={{
        boxShadow: '0px 0px 20px -7px rgb(0 0 0)',
      }}
      className={'primary_bg container horizontal horizontalTabletBreak padding_l0 widePadding_l1'}>
      <section className={'subcontainer horizontal horizontalTabletBreak fitWidth'}>
        <Logo
          src={'/logo.png'}
          width={'10vw'}
          minWidth={'60px'}
        />
        <Menu
          menuGroup={menuGroup}
          menuItems={menuItems}
        />
      </section>
      <Searchbar
        id={'main_searchbar'}
        name={'main_searchbar'}
        inputcustomclasses={'searchbarheight font_l1 wide padding_l3 noborder round_l3'}
        customclasses={'searchbarheight wide'}
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
        <Button
          text={'Sign In'}
          innerclasses={'widePadding_l3 round_l3'}
          bg={'var(--secondaryColor)'}
          height={'40px'}
          plane={'1'}
          link={'/login'}
          textclasses={'transition tertiary_color font_l3'}
        />
      </div>
    </section>
    <section className="ax_elements" nomain="true">
      {menuItems.map((item, key) => (
        <DropdownBody
          key={key}
          mode={'dropdown_body_v4'}
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
          subOpening={item.subopening}
          options={JSON.stringify(item.options)}
          optionsApi={item.optionsApi}
          dropdownid={key}
        />
      ))}
    </section>
  </>
  )
}
