import React from 'react';
import Container from '@material-ui/core/Container';

type props = {
    children: React.ReactElement;
  };
export default function WContainer(props:props) {
  return (
      <Container maxWidth="md">
          {props.children}
      </Container>
  );
}