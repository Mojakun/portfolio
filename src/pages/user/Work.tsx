import React from 'react';
import styled from 'styled-components';
import UserLink from '@/components/organisms/user/Link';
import { Grid, Paper, Typography } from '@mui/material/';
import WorkCard from '@/organisms/user/WorkCard'

export default function UseWork() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <WorkCard />
        </Grid>
      </Grid>
    </>
  );
}
