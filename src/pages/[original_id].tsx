import React from 'react';
import { memo } from 'react';
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


import { UserProvider } from 'provider/UserProvider';

const Home: NextPage = () => {
 
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <UserProvider>
      <MainLayout title='profile'>
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
    </UserProvider>
  );
};

export default Home;
