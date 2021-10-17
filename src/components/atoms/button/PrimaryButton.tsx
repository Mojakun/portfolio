import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

type Props = {
  children: React.ReactNode;
};
const PrimaryButton = (props: Props) => {
  return (
    <>
      <SButton variant='contained'>{props.children}</SButton>
    </>
  );
};

const SButton = styled(Button)`
    color:white;
    font-weight:900;
`;

export default PrimaryButton;
