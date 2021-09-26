import React from 'react';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';
import CategoryChip from '@/atoms/chip/CategoryChip'
type Props = {
  user_image_src: string;
};

function UserHeader(props: Props) {
  return (
    <>
      <UserLargeAvatar
        src={props.user_image_src}
      />
      <SUserName>もじやくん</SUserName>
      <CategoryChip></CategoryChip>
    </>
  );
}

const SUserName = styled.h1`
  font-size:2rem
`;


export default UserHeader;
