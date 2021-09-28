import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Avatar, Typography, CardHeader, Paper} from '@material-ui/core';


export default function UserLink() {

  return (
    <>



      <Card>
        <CardHeader
          avatar={
            <SDiv>
              <Avatar ria-label='recipe'>twitter</Avatar>
            </SDiv>
          }
          title={
            <SDiv>
              <Typography variant="h6">twitter</Typography>
            </SDiv>
          }
        />
      </Card>
    </>
  );
}


const SDiv = styled.div`
  text-align:center
`;
const SCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-around;
  aligin-items: center;
`;
