import React from 'react';
import {memo} from 'react';
import type { NextPage } from 'next';
import MainLayout from '@/components/templates/MainLayout';

import Tab from '@material-ui/core/Tab';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import UserLink from '@/components/organisms/user/Link';
import UserHome from './user/Home';
import UserWork from './user/Work';
import UserSkill from './user/Skill';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID, GET_USERS } from 'queries/queries';
import { GetUserByIdQuery, GetUsersQuery } from 'types/generated/graphql';
import { useRouter } from 'next/router';

// 3075b0b6-746b-4b23-aacb-26160d2f3d2f
const Home: NextPage = () => {
  const router = useRouter();
  const { data, error, loading } = useQuery<GetUserByIdQuery>(GET_USER_BY_ID, {
    variables: { id: router.query.id },
  });
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <MainLayout title='profile' user_image_src='' user_data={data}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='lab API tabs example'
          textColor='primary'
          indicatorColor='primary'
        >
          <Tab label='HOME' value='1' />
          <Tab label='WORK' value='2' />
          <Tab label='SKILL' value='3' />
        </TabList>
        <TabPanel value='1'>
          <UserHome />
        </TabPanel>
        <TabPanel value='2'>
          <UserWork />
        </TabPanel>
        <TabPanel value='3'>
          <UserSkill />
        </TabPanel>
      </TabContext>
    </MainLayout>
  );
};

export default Home;
