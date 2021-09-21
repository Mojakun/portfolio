import React from 'react';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

function Footer() {
  return (
    <SFooter>
      <p>footer_test</p>
    </SFooter>
  );
}

const SFooter = styled.footer`
  background: pink;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
`;

export default Footer;
