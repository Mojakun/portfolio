import React from 'react';
import { Theme } from '@mui/material/styles';
import styled from 'styled-components';
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';
import CategoryChip from '@/atoms/chip/CategoryChip';
import CardHeader from '@mui/material/CardHeader';

type Props = {
  user_image_src: string;
};

function UserHeader(props: Props) {
  return (
    <>
      <CardHeader
        avatar={
          <>
            <UserLargeAvatar src={props.user_image_src} />
          </>
        }
        title={
          <>
            <SUserName>もじゃくん</SUserName>
          </>
        }
        subheader={
          <>
            <CategoryChip></CategoryChip>
          </>
        }
      ></CardHeader>
    </>
  );
}

const SUserName = styled.h1`
  font-size: 1.5rem;
`;

export default UserHeader;
