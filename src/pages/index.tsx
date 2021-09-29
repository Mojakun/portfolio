import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '@/components/templates/MainLayout';

import Tab from '@material-ui/core/Tab';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import UserLink from '@/components/organisms/user/Link';
import UserHome from './user/Home';
import UserPlan from './user/Plan';

const Home: NextPage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <MainLayout title='profile' user_image_src=''>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='lab API tabs example'
          textColor='primary'
          indicatorColor='primary'
        >
          <Tab label='HOME' value='1' />
          <Tab label='PLAN' value='2' />
          <Tab label='SKILL' value='3' />
        </TabList>
        <TabPanel value='1'>
          <UserHome />
        </TabPanel>
        <TabPanel value='2'>
          <UserPlan/>
        </TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </MainLayout>
  );
};

export default Home;
