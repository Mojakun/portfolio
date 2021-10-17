import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import TextButton from '@/components/atoms/button/TextButton';
import styled from 'styled-components';
import Link from 'next/link';

export default function PrimarySearchAppBar() {
  const isLogin = false; //とりあえずログインしてない所から作成

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = () => {
    if (isLogin) {
      return (
        <>
          <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={4} color='error'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
            <Badge badgeContent={17} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-controls={menuId}
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </>
      );
    }

    if (!isLogin) {
      return (
        <>
          <TextButton>ログイン</TextButton>
          <Link href='./login/singup'>
            <a>
              <PrimaryButton>新規登録</PrimaryButton>
            </a>
          </Link>
        </>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='inherit' elevation={0}>
        <Toolbar>
          <Link href='/home'>
            <a>
              <Typography variant='h6' noWrap component='div'>
                FOFIO
              </Typography>
            </a>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box>{renderMenu()}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
