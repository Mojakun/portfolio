import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

type props = {
  color:'primary | secondary | '
}
export default function ColorChips() {
  return <SChip label='success' variant='outlined' />;
}

const SChip = styled(Chip)`
  color: ${Theme => theme.colors.primary}
  border-color: pink;
`;
