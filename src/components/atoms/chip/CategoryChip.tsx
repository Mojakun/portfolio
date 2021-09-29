import * as React from 'react';
import Chip from '@mui/material/Chip';
import styled from 'styled-components';
import theme from 'styles/theme';
import { OverridableStringUnion ,ChipPropsColorOverrides} from '@material-ui/types';

type Props = {
  color?: OverridableStringUnion<
    'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    ChipPropsColorOverrides
  >;
  label: string;
};

export default function ColorChips(props: Props) {
  return <Chip label={props.label} color={props.color} variant='outlined' />;
}
