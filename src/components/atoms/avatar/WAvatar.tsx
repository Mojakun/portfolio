//Wはラッパー
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
