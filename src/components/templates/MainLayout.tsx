//Wはラッパー
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import HeaderImage from '@/atoms/layout/HeaderImage';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import Header from '@/organisms/layout/Header';
import Footer from '@/organisms/layout/Footer';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WContainer from '@/atoms/layout/WContainer';
import UserHeader from '@/organisms/user/UserHeader';

type Props = {
  children: React.ReactNode;
};

function MainLayout(props: Props): JSX.Element {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderImage />
        </Grid>
        <WContainer>
          <Grid container>
            <Grid item xs={12}>
              {/* <UserHeader src={props.}/> */}
            </Grid>
            <Grid item xs={4}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={8}>
              <main className={styles.main}>{props.children}</main>
            </Grid>
          </Grid>
        </WContainer>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default MainLayout;
