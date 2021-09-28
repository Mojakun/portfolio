import React from 'react';
import { Theme } from '@mui/material/styles';
import styled from 'styled-components';
import AppBar from '@/molecules/header/AppBar';
function Header() {
  return (
    <SHeader>
      <AppBar />
    </SHeader>
  );
}

const SHeader = styled.header`
  background: blue;
`;

export default Header;
