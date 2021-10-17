import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

type Props = {
  children: React.ReactNode;
};
const TextButton = (props: Props) => {
  return (
    <>
      <SButton variant='text'>{props.children}</SButton>
    </>
  );
};

const SButton = styled(Button)`
    font-weight:900;
`;

export default TextButton;
