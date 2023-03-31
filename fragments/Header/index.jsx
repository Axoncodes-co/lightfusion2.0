
import style from './style.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'
const Searchbar = dynamic(() => import('../../axg-react/Searchbar3'), {ssr: false})
const Logo = dynamic(() => import('../../axg-react/Logo'), {ssr: false})
const Text = dynamic(() => import('../../axg-react/Text2'), {ssr: false})
const Menu = dynamic(() => import('../../axg-react/Menu'), {ssr: false})
const DropdownBody = dynamic(() => import('../../axg-react/DropdownBody5'), {ssr: false})
const Button = dynamic(() => import('../../axg-react/Button'), {ssr: false})
export default function Header({ categories }) {

  const [menuGroup, setMenuGroup] = useState({
    headTitlecolor: '#ededed',
    height: '50',
    color: 'var(--secondaryTextColor)',
    colorHover: 'var(--tertiaryTextColor)',
    activeBackground: 'var(--primaryColor)',
    headBackground: '#0000',
    headBackgroundHover: '#575757',
    text: {
      text: 'Menu',
      textclasses: 'weight_l3 font_l4 secondary_font nomargin secondary_color primary_color_hover',
      customclasses: 'secondary_bg_hover widePadding_l1',
    },
    background: 'var(--primaryColor)',
    subOpening: 'sub',
    subTrigger: 'click',
    dropdownid: 'mainHeaderGroup',
    customclasses: 'subcontainer righty unsetPos',
  })

  const [menuItems, setMenuItems] = useState([
    {
      structure: 'link',
      text: {
        text: 'Home',
        link: '/',
        textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color primary_color_hover',
        customclasses: 'secondary_bg_hover widePadding_l1',
      },
      subtrigger: 'click',
      subopening: 'sub',
    },
    {
      text: {
        text: 'Courses',
        textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color primary_color_hover',
        customclasses: 'secondary_bg_hover widePadding_l1'
      },
      targetLocator: 'courseslocator',
      structure: 'mega singletab',
      subtrigger: 'click',
      subopening: 'sub',
      background: 'var(--tertiaryColor)',
      exit: '1',
      listclasses: 'container wrap',
      customclasses: 'wide righty subcontainer',
      options: categories.map(category => ({
        listclasses: 'vertical centerOnTablet lefty',
        text: {
          text: category.title,
          link: `/${category.slug}`,
          textclasses: 'font_l7 tertiary_color nomargin',
          icon: {
            svg: category.svg,
            customclasses: style.title
          },
          customclasses: 'centerOnTablet colgap_l2',
        },
        level: 'undertab',
        content: category.courses.map(course => ({
          text: {
            text: course.title,
            link: `/${category.slug}/${course.slug}`,
            textclasses: 'nomargin font_l4 primary_color secondary_color_hover weight_l3',
            customclasses: 'round_l2 widePadding_l1 colgap_l2',
            icon: {
              svg: course.svg,
              customclasses: style.course
            },
          },
          level: 'undertab',
        }))
      }))
    },
    {
      structure: 'link',
      text: {
        text: 'About',
        link: '/about',
        textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color primary_color_hover',
        customclasses: 'secondary_bg_hover widePadding_l1',
      },
      subtrigger: 'click',
      subopening: 'sub',
    },
    {
      structure: 'link',
      text: {
        text: 'Contact',
        link: '/contact',
        textclasses: 'weight_l3 font_l3 secondary_font nomargin secondary_color primary_color_hover',
        customclasses: 'secondary_bg_hover widePadding_l1',
      },
      subtrigger: 'click',
      subopening: 'sub',
    },
  ])

  const links = []
  const names = []
  categories.forEach(cat => {
    links.push(`/${cat.slug}`)
    names.push(cat.title)
    cat.courses.forEach(course => {
      links.push(`/${cat.slug}/${course.slug}`)
      names.push(course.title)
      course.lessons.forEach(lesson => {
        links.push(`/${cat.slug}/${course.slug}/${lesson.slug}`)
        names.push(lesson.title)
      })
    })
  })
  return (
    <>
    <section
      style={{
        boxShadow: '0px 0px 20px -7px rgb(0 0 0)',
        display: 'grid',
        justifyItems: 'center',
        justifyContent: 'center',
        gridTemplateColumns: '30vw 17vw 30vw',
      }}
      className={'transition primary_bg container horizontal horizontalTabletBreak padding_l0'}>
      <Menu
        menuGroup={menuGroup}
        menuItems={menuItems}
      />
      <Logo
        src={'/logo.png'}
        width={'10vw'}
        minWidth={'90px'}
      />
      <Searchbar
        id={'main_searchbar'}
        name={'main_searchbar'}
        inputcustomclasses={'searchbarheight font_l1 wide padding_l3 noborder round_l3'}
        customclasses={'searchbarheight wide'}
        bg={'#c1c1c1a3'}
        color={'#000'}
        placeholder={'Search...'}
        queryid={'mainsearchquery'}
        collapseonmobile={'1'}
        labelclasses={'subcontainer lefty hoversearchcoverlabel'}
        inputcovercustomclasses={'subcontainer vertical'}
        reslistcustomclasses={'boxshadow darker'}
        outformclasses={'searchbarsizes'}
        searchquerynames={names}
        searchquerylinks={links}
      />
    </section>
    <section className="ax_elements" nomain="true">
      {menuItems.map((item, key) => (
        <DropdownBody
          key={key}
          mode={'dropdown_body_v4'}
          listclasses={item.listclasses}
          exit={item.exit}
          text={JSON.stringify(item.text)}
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
          options={item.options}
          optionsApi={item.optionsApi}
          dropdownid={key}
        />
      ))}
    </section>
  </>
  )
}
