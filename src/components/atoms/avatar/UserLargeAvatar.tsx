import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
