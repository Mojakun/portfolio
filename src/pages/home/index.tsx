import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'queries/queries';
import { GetUsersQuery } from 'types/generated/graphql';
import Grid from '@mui/material/Grid';

import Link from 'next/link';

import HomeCard from '@/components/organisms/user/HomeCard';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetUsersQuery>(GET_USERS);

  if (loading)
    return (
      <HomeLayout title='home'>
        <p>loading...</p>
      </HomeLayout>
    );
  return (
    <HomeLayout title='home'>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          test
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex' }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              {data?.d_users.map((user) => (
                <Link href={`/${user.original_id}`} key={user.id}>
                  <a>
                    <HomeCard userInfo={user} />
                  </a>
                </Link>
              ))}
            </Grid> 
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Home;
