import React from 'react';
import Container from '@mui/material/Container';

type props = {
  children: React.ReactElement;
};
export default function WContainer(props: props) {
  return <Container maxWidth='md'>{props.children}</Container>;
}
