import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Image from 'next/image';

function HeaderImage() {
  // /"
  return (

  <SDiv>
    
  </SDiv>

  )
}

const SDiv = styled.div`
  background: url("https://picsum.photos/1260/150")center top/cover no-repeat;;
  width: 100%;
	height: 0;
	padding-top: calc(150 / 1000 * 100%); /* calc(画像高さ÷画像幅 ×100%) */
`;

export default HeaderImage;
