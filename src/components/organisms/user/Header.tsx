import React, { useContext, memo ,VFC} from 'react';
import { Theme } from '@mui/material/styles';
import styled from 'styled-components';
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';
import CategoryChip from '@/atoms/chip/CategoryChip';
import CardHeader from '@mui/material/CardHeader';
import { UserContext } from 'provider/UserProvider';
import { GetUserByIdQuery } from 'types/generated/graphql';



const UserHeader = () => {
  const userInfo = useContext(UserContext);
  return (
    
    <>
      <CardHeader
        avatar={
          <>
            <UserLargeAvatar src={userInfo.image_sorce} />
          </>
        }
        title={
          <>
            <SUserName>{userInfo.name}</SUserName>
          </>
        }
        subheader={
          <>
            <CategoryChip label='エンジニア'></CategoryChip>
          </>
        }
      ></CardHeader>
    </>
  );

};

const SUserName = styled.h1`
  font-size: 1.5rem;
`;

export default memo(UserHeader)
