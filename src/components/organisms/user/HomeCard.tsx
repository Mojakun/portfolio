import React from 'react';
import styled from 'styled-components';
import CardHaederWithIcon from '@/components/molecules/card/CardHaederWithIcon';
import CardImage from '@/components/molecules/card/CardImage';
import WCardContent from '@/components/molecules/card/WCardContent';
import { Card } from '@mui/material';

type Props = {
  userInfo: any;
};

const HomeCard = (props: Props) => {
  return (
    <Card>
      <CardHaederWithIcon
        src='https://picsum.photos/200/300'
        title={props.userInfo?.name}
      />
      <CardImage src='https://picsum.photos/200/300' />
      <WCardContent content='liejf' />
    </Card>
  );
};

const SExsample = styled.div``;

export default HomeCard;
