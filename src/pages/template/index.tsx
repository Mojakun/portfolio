import React from 'react';
import type { NextPage } from 'next';
import HomeLayout from '@/components/templates/HomeLayout';

import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <HomeLayout title='home'>
      <Link href={'/template/atoms'}>
        <a>atoms</a>
      </Link>
      <Link href={'/template/molecules'}>
        <a>molecules</a>
      </Link>
    </HomeLayout>
  );
};

export default Home;
