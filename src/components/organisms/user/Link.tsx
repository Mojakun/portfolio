import React, { memo } from 'react';
import styled from 'styled-components';
import { Card, CardContent, Avatar, Typography, CardHeader, Paper } from '@material-ui/core';

type Props = {
  icon: number;
};
const UserLink = (props: Props) => {
  const icons = [
    {
      name: 'YouTube',
      src: 'icon/icon_youtube-sign.svg',
    },
    {
      name: 'Fecebook',
      src: 'icon/icon_facebook-sign.svg',
    },
    {
      name: 'Twitter',
      src: 'icon/icon_twitter-sign.svg',
    },
    {
      name: 'instagram',
      src: 'icon/icon_instagram-sign.svg',
    },
    {
      name: 'spotify',
      src: 'icon/icon_spotify-sign.svg',
    },
    {
      name: 'TikTok',
      src: 'icon/tiktok-logo.svg',
    },
    {
      name: 'github',
      src: 'icon/icon_github-sign.svg',
    },
  ];
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <SDiv>
              <Avatar ria-label='recipe' src={icons[props.icon]?.src}></Avatar>
            </SDiv>
          }
          title={
            <SDiv>
              <Typography variant='h6'>{icons[props.icon]?.name}</Typography>
            </SDiv>
          }
        />
      </Card>
    </>
  );
};

const SDiv = styled.div`
  text-align: center;
`;
const SCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-around;
  aligin-items: center;
`;

export default memo(UserLink);
