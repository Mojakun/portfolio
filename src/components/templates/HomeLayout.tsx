//Wはラッパー
import React from 'react';
import HeaderImage from '@/atoms/layout/HeaderImage';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '@/organisms/layout/Header';


type Props = {
  title: string;
  children: React.ReactNode;
};

function HomeLayout(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

     
      {props.children}
    </>
  );
}

export default HomeLayout;
