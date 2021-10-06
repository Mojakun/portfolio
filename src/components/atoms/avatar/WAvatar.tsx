//Wはラッパー
import React from 'react';
import { Theme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

type Props = {
  src: string;
};

function WAvatar(props: Props) {
  return (
    <div>
      <SAvater alt='avatar' src={props.src} />
    </div>
  );
}

const SAvater = styled(Avatar)``;

export default WAvatar;
