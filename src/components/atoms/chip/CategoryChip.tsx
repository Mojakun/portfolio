import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import theme from 'styles/theme'


type props = {
  color:'primary | secondary | '
}

export default function ColorChips() {
  return <Chip label='エンジニア' color="primary" variant='outlined' />;
}

