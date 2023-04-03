import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Column = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '250px',
  padding: theme.spacing(2),
}))

const HeadItem = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 10,
  marginBottom: theme.spacing(2),
  color: 'var(--tertiaryTextColor)'
}))

const SubItem = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: theme.spacing(1),
  gap: 10,
  color: 'var(--primaryTextColor)',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))


function createSvgIcon(svg, className) {
  const Component = (props) => (
    <Box className={className}>
        <span dangerouslySetInnerHTML={{ __html: svg }} />
    </Box>
  );
  Component.displayName = 'SvgIcon';
  return Component;
}

function MegaMenu({menuItems}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box sx={{height: '100%'}}>
        <Button
          aria-controls="mega-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            backgroundColor: menuItems.background,
            color: menuItems.color,
            height: '100%',
            '&:hover': {
              backgroundColor: menuItems.hoverbackground,
              color: menuItems.hovercolor,
            },
          }}
        >{menuItems.text}</Button>
        <Menu
          id="mega-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'mega-menu',
            sx: {
              width: '100vw',
              display: 'flex',
              flexWrap: 'wrap',
              backgroundColor: 'var(--tertiaryColor)',
              justifyContent: 'space-between',
            },
          }}
        >
          {menuItems.options.map((menu, key) => {
            const IconComponent = createSvgIcon(menu.icon.svg, menu.icon.customclasses);
            return (
            <Column key={key}>
              <HeadItem href={menu.link}>
                <IconComponent />
                <Typography variant="h4" dangerouslySetInnerHTML={{ __html: menu.text }}></Typography>
              </HeadItem>
              {menu.subitems.map((subitem, subkey) => {
                const IconComponent = createSvgIcon(subitem.icon.svg, subitem.icon.customclasses);
                return (
                <SubItem key={subkey} href={subitem.link}>
                  <IconComponent />
                  <Typography variant="h6" dangerouslySetInnerHTML={{ __html: subitem.text }}></Typography>
                </SubItem>
              )})}
            </Column>
          )})}
        </Menu>
      </Box>
    </Box>
  );
};

export default MegaMenu;
