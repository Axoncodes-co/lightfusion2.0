
import style from './style.module.css'
import Link from '@mui/joy/Link'
import { useState } from 'react'
import MegaMenu from '../../custom-mui/MegaMenu'
import { Stack } from '@mui/joy'
import Menu from '@mui/material/Menu';
import SearchBar from '../../custom-mui/Searchbar'
import Image from 'next/image'

export default function Header({ categories }) {
  // const main_searchqueryItems = []
  // categories.forEach(cat => {
  //   main_searchqueryItems.push({
  //     link: `/${cat.slug}`,
  //     text: cat.title
  //   })
  //   cat.courses.forEach(course => {
  //     main_searchqueryItems.push({
  //       link: `/${cat.slug}/${course.slug}`,
  //       text: course.title
  //     })
  //     course.lessons.forEach(lesson => {
  //       main_searchqueryItems.push({
  //         link: `/${cat.slug}/${course.slug}/${lesson.slug}`,
  //         text: lesson.title
  //       })
  //     })
  //   })
  // })

  const [menuanchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const themenu = (<>
    <Link
      color="var(--secondaryTextColor)"
      background="var(--primaryColor)"
      disabled={false}
      level="body1"
      underline="none"
      variant="plain"
      href="/"
      sx={{
        '&:hover': {
          backgroundColor: 'var(--secondaryColor)',
          color: 'var(--primaryColor)',
        }
      }}
    >Home</Link>
    <MegaMenu menuItems={{
      text: 'Courses',
      color: 'var(--secondaryTextColor)',
      hovercolor: 'var(--primaryColor)',
      hoverbackground: 'var(--secondaryColor)',
      background: 'var(--primaryColor)',
      options: categories.filter(cat => cat.slug != 'articles').map(category => ({
        text: category.title,
        link: `/${category.slug}`,
        icon: {
          svg: category.svg,
          customclasses: style.title
        },
        subitems: category.courses.map(course => ({
          text: course.title,
          link: `/${category.slug}/${course.slug}`,
          icon: {
            svg: course.svg,
            customclasses: style.course
          },
        }))
      }))
    }} />
    <Link
      color="var(--secondaryTextColor)"
      background="var(--primaryColor)"
      disabled={false}
      level="body1"
      underline="none"
      variant="plain"
      href="/about"
      sx={{
        '&:hover': {
          backgroundColor: 'var(--secondaryColor)',
          color: 'var(--primaryColor)',
        }
      }}
    >About</Link>
    <Link
      color="var(--secondaryTextColor)"
      background="var(--primaryColor)"
      disabled={false}
      level="body1"
      underline="none"
      variant="plain"
      href="/contact"
      sx={{
        '&:hover': {
          backgroundColor: 'var(--secondaryColor)',
          color: 'var(--primaryColor)',
        }
      }}
    >Contact</Link>
  </>)

  return (
    <>
    <section
      className={'widePadding_l3 fitWidth transition primary_bg container horizontal horizontalTabletBreak padding_l0'}
    >
      <Image
        src={'/logo.png'}
        alt={'homapilot logo'}
        width={120}
        height={49}
      />
      <Link
        color="var(--secondaryTextColor)"
        background="var(--primaryColor)"
        disabled={false}
        level="body1"
        underline="none"
        variant="plain"
        onClick={handleMenuClick}
        sx={{
          '&:hover': {
            backgroundColor: 'var(--secondaryColor)',
            color: 'var(--primaryColor)',
          },
          '@media (min-width: 901px)': {
            display: 'none',
          },
        }}
      >Menu</Link>
      <Menu
        id="header-menu"
        anchorEl={menuanchorEl}
        open={Boolean(menuanchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'header-menu',
          sx: {
            gap: 1,
            display: 'flex',
            p: 1,
            flexWrap: 'wrap',
            backgroundColor: 'var(--primaryColor)',
            justifyContent: 'flex-start',
            '@media (min-width: 901px)': {
              display: 'none',
            },
          },
        }}
      >{themenu}</Menu>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{
          width: '100%',
          '@media (max-width: 900px)': {
            display: 'none',
          },
        }}
      >
        {themenu}
      </Stack>
      {/* <SearchBar items={main_searchqueryItems} /> */}
    </section>
  </>
  )
}
