
import { useState } from 'react'
import Menu from '../../builtin-axg/Menu'
import { DropdownTemplateHandlerBody } from '../../builtin-axg/dropdown/v5'
import Image from 'next/image'
import Link from 'next/link'


export default function Header({ categories, courses }) {

  const [menuGroup, setMenuGroup] = useState({
    headTitlecolor: '#ededed',
    height: '50px',
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
    subopening: 'sub',
    subtrigger: 'click',
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
      options: categories.map(({title, slug: catslug }) => ({
        listclasses: 'vertical centerOnTablet lefty',
        text: {
          text: title,
          link: `/${catslug}`,
          textclasses: 'font_l7 tertiary_color nomargin',
          customclasses: 'centerOnTablet colgap_l2',
          // icon: {
          //   svg: category.svg,
          //   customclasses: style.title
          // },
        },
        level: 'undertab',
        content: courses[catslug]?.courses?.map(({title, slug: courseslug}) => ({
          text: {
            text: title,
            link: `/${catslug}/${courseslug}`,
            textclasses: 'nomargin widePadding_l1 font_l4 primary_color secondary_color_hover weight_l3',
            customclasses: 'round_l2 colgap_l2',
            // icon: {
            //   svg: course.svg,
            //   customclasses: style.course
            // },
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

  // const links = []
  // const names = []
  // Object.entries(categories).map(item => item[1]).forEach(cat => {
  //   links.push(`/${cat.slug}`)
  //   names.push(cat.title)
  //   cat.courses.forEach(course => {
  //     links.push(`/${cat.slug}/${course.slug}`)
  //     names.push(course.title)
  //     course.lessons.forEach(lesson => {
  //       links.push(`/${cat.slug}/${course.slug}/${lesson.slug}`)
  //       names.push(lesson.title)
  //     })
  //   })
  // })

  return (
    <>
    <section
      style={{
        // boxShadow: '0px 0px 20px -7px rgb(0 0 0)',
        // display: 'grid',
        // justifyItems: 'center',
        // justifyContent: 'center',
        // gridTemplateColumns: '30vw 17vw 30vw',
        justifyContent: 'flex-start'
      }}
      className={'transition primary_bg container horizontal horizontalTabletBreak padding_l0'}
    >
      <Link href={'/'}>
        <Image
          alt={'Logo'}
          src={'/logo.png'}
          width={120}
          height={48}
          style={{minWidth: 90}}
        />
      </Link>
      <Menu
        menuGroup={menuGroup}
        menuItems={menuItems}
      />
      {/* <Searchbar
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
      /> */}
    </section>
    <section className="ax_elements" nomain="true">
      {menuItems.map((item, key) => (
        <DropdownTemplateHandlerBody
          key={key}
          listclasses={item.listclasses}
          exit={item.exit}
          text={item.text}
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
