import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';

import Tab from '@material-ui/core/Tab';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import UserLink from '@/components/organisms/user/Link';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID, GET_USERS } from 'queries/queries';
import { GetUserByIdQuery, GetUsersQuery } from 'types/generated/graphql';

import Link from 'next/link';

// 3075b0b6-746b-4b23-aacb-26160d2f3d2f
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
      {data?.d_users.map((users) => (
        <Link href={`/${users.original_id}`} key={users.id}>
          <a>{users.name}</a>
        </Link>
      ))}
    </HomeLayout>
  );
};

export default Home;
