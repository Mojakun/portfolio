//Wはラッパー
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default MainLayout;
