import React from 'react';
import styled from 'styled-components';
import UserLink from '@/components/organisms/user/Link';
import { Grid, Paper, Typography } from '@mui/material/';
import PlanCard from '@/organisms/user/PlanCard'
import Linear from '@/atoms/progress/Linear'

export default function UseWork() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          <Paper elevation={0} sx={{padding:5}}>
              {/* <Typography>
                  SKILL
              </Typography> */}
            HTML
            <Linear value={80}/>
            CSS
            <Linear value={80}/>
            SCSS
            <Linear value={60}/>
            JavaScript
            <Linear value={80}/>
            JQuery
            <Linear value={80}/>
            Vue.js
            <Linear value={80}/>
            React.js
            <Linear value={60}/>
            Node.js
            <Linear value={50}/>
            Nuxt.js
            <Linear value={80}/>
            Next.js
            <Linear value={60}/>
            PHP
            <Linear value={80}/>
            Laravel
            <Linear value={40}/>
            PostgreSQL
            <Linear value={60}/>
            MySQL
            <Linear value={60}/>
            Hasura
            <Linear value={50}/>
            GraphQL
            <Linear value={50}/>
            Git
            <Linear value={60}/>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
