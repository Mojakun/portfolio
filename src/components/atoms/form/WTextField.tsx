import React from 'react';
// import styled from 'styled-components';
import TextField from '@mui/material/TextField';

type Props = {
  value: string;
  label: string;
  id?: string;
  isError?: boolean;
  helperText?: string;
  // onChange: () => void;
};

const WTextField = (props: Props) => {
  return (
    <>
      <TextField
        id={props.id}
        value={props.value}
        label={props.label}
        variant='outlined'
        helperText={props.helperText}
        // onChange={props.onChange}
        error={props.isError}
      />
    </>
  );
};

// const SExsample = styled.div``;

export default WTextField;
