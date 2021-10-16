import React, { useState } from 'react';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import { GetMCategoriesQuery } from 'types/generated/graphql';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';

type Props = {
  categories: GetMCategoriesQuery;
};

const HomeNav = (props: Props) => {
  const [categories, setCatefories] = useState(props.categories.m_categories_header);

  const handleClick = (e) => {
    // setCatefories({ ...categories, false: e.target.isOpen });
    console.log(e.target);
  };


  return (
    <>
      <ListItemButton>
        <SListItemText primary='すべて' />
      </ListItemButton>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder='クリエイターを探す' inputProps={{ 'aria-label': 'search' }} />
      </Search>
      <Divider />

      {categories.map((category) => (
        <>
          <ListItemButton onClick={handleClick}>
            <SListItemText primary={category.name} />
            {category.isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {category.m_categories_details.map((detail) => (
            <Collapse in={true} timeout='auto' unmountOnExit key={detail.id}>
              <List disablePadding sx={{ pl: 2 }}>
                <ListItemButton>
                  <ListItemText primary={detail.name} />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </>
      ))}
    </>
  );
};

const SListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-weight: 900;
  }
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default HomeNav;
