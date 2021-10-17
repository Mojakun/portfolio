import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import Grid from '@mui/material/Grid';
import WContainer from '@/components/atoms/layout/WContainer';

const Singup: NextPage = () => {
  return (
    <HomeLayout title='home'>
      <WContainer>
        <Grid container spacing={2} sx={{ pt: 3 }}>
          <Grid item lg={6}>
          </Grid>
          <Grid item lg={6}>
            
          </Grid>
        </Grid>
      </WContainer>
    </HomeLayout>
  );
};

export default Singup;
