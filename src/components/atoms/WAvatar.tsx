//Wはラッパー
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from "styled-components";


function WAvatar() {
  return (
    <div >
      <SAvater alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  );
}

const SAvater = styled(Avatar)`
  margin-top:50px
`


export default WAvatar