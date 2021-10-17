import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';
import { useQuery } from '@apollo/client';
import { GET_USERS, GET_M_CATEGORIES } from 'queries/queries';
import { GetUsersQuery, GetMCategoriesQuery } from 'types/generated/graphql';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import HomeCard from '@/components/organisms/user/HomeCard';
import HomeNav from '@/components/organisms/layout/HomeNav';

const Home: NextPage = () => {
  const {
    data: users,
    error: usersError,
    loading: usersLoading,
  } = useQuery<GetUsersQuery>(GET_USERS);
  const {
    data: categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useQuery<GetMCategoriesQuery>(GET_M_CATEGORIES);

  if (usersLoading && categoriesLoading)
    return (
      <HomeLayout title='home'>
        <p>loading...</p>
      </HomeLayout>
    );
  return (
    <HomeLayout title='home'>
      <Grid container spacing={2} sx={{pt:3}}>
        <Grid item xs={2}>
          {categories && <HomeNav categories={categories}></HomeNav>}
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={1}>
            {users?.d_users.map((user) => (
              <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={user.id}>
                <Link href={`/${user.original_id}`}>
                  <a>
                    <HomeCard userInfo={user} />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Home;
