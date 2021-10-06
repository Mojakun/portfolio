import React from 'react';
import styled from 'styled-components';
import UserLink from '@/components/organisms/user/Link';
import { Grid, Paper, Typography } from '@mui/material/';
import PlanCard from '@/organisms/user/PlanCard'

export default function UserHome() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <PlanCard />
        </Grid>
      </Grid>
    </>
  );
}
