import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from 'lib/apolloClient';

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = initializeApollo();
  useEffect(() => {
    const jssStyles: Element | null = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
};

export default CustomApp;
