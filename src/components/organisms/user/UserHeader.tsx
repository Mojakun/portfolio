import React from 'react';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';

type Props = {
    src:string
}
function UserHeader(props:Props) {
  return (
    <>
      <UserLargeAvatar src={props.src}></UserLargeAvatar>
    </>
  );
}

const SHeader = styled.header`
  background:blue
`;

export default UserHeader;
