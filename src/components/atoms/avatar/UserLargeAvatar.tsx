import React from 'react';
import { Theme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

type Props = {
  src: string;
};

export default function UserLargeAvatar(props: Props) {
  return <SAvater alt='avatar' src={props.src} />;
}

const SAvater = styled(Avatar)`
  width: 100px;
  height: 100px;
`;
