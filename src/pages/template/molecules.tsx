import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

//molecules
import CardHeader from '@/components/molecules/card/CardHaederWithIcon';
import CardMedia from '@/components/molecules/card/CardImage';
import CardContent from '@/components/molecules/card/WCardContent';

const Molecules: NextPage = () => {
  return (
    <HomeLayout title='home'>
      <Grid container spacing={3}>

        <Grid item xs={4}>
          <Paper elevation={3}>
            <Link href={'/template'}>
              <a>menu</a>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <CardHeader src="https://picsum.photos/id/1/200/300" title="test" subTitle="test"/>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <CardMedia src='https://picsum.photos/id/1/200/300' />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <CardContent content='recusandae? Reiciendis dolorum numquam exercitationem maiores soluta expedita similique!' />
          </Paper>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Molecules;
