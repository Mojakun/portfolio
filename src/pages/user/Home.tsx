import React from 'react';
import styled from 'styled-components';
import UserLink from '@/components/organisms/user/Link';
import { Grid, Paper, Typography } from '@mui/material/';

export default function UserHome() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{padding:5}}>
            <Typography variant='h6' component='h2'>
              自己紹介
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              ■ 34歳/エンジニア👨‍💻 nuxt.js ■ ミニマリスト ■ 努力はコスパ最強 ♬ king
              gnu/suchmos/vaundy
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={1}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={2}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={3}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={4}/>
        </Grid>
      </Grid>
    </>
  );
}
