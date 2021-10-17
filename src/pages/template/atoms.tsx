import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
//atoms
import UserLargeAvatar from '@/components/atoms/avatar/UserLargeAvatar';
import PrimaryButton from '@/components/atoms/button/PrimaryButton';
import WTextField from '@/components/atoms/form/WTextField';

// type Pros = {
//   onChange: (value: string ) => void;
// }
const Atoms: NextPage = () => {
  const [WTextiFieldValue, setWTextiFieldValue] = useState('');
  const coutUpFirstCounter = useCallback((e) => {
    console.log('発火');
    console.log(e);
  }, []);

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
            <UserLargeAvatar src='https://picsum.photos/id/1/200/300' />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <PrimaryButton>プライマリー</PrimaryButton>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={3} sx={{ padding: '1rem', justifyContent: 'center', display: 'flex' }}>
            <WTextField
              value={WTextiFieldValue}
              onChange={setWTextiFieldValue}
              label='test'
              isError={false}
              helperText=''
            ></WTextField>
          </Paper>
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Atoms;
