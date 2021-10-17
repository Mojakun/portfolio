import React, { useContext } from 'react';
import styled from 'styled-components';
import UserLink from '@/components/organisms/user/Link';
import { Grid, Paper, Typography } from '@mui/material/';
import { UserContext } from 'provider/UserProvider';



export default function UserHome() {
  const userInfo = useContext(UserContext)
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ padding: 5 }}>
            <Typography variant='h6' component='h2'>
              自己紹介
            </Typography>
            <Typography variant='subtitle1' component='h2'>
             {userInfo}
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={1} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={2} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={3} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={4} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={5} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <UserLink icon={6} />
        </Grid>
      </Grid>
    </>
  );
}
