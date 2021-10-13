import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
//atoms
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';

const Atoms: NextPage = () => {
  return (
    <HomeLayout title='home'>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper elevation={3}>
            <Link href={'/template'}>
              <a>menu</a>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <p>UserLargeAvatar</p>
            <UserLargeAvatar src='https://picsum.photos/id/1/200/300' />
          </Paper>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Atoms;
