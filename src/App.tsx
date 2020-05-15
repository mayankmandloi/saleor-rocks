import React from 'react';
import './App.css';
import { LeftMenuWrapper } from './view/leftmenu/left-menu-wrapper';
import { makeStyles, Theme, createStyles, Grid, CssBaseline, Container } from '@material-ui/core';

function App() {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);
const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <LeftMenuWrapper></LeftMenuWrapper>
        </Grid>
        <Grid item xs={3}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae ipsum soluta, nostrum animi provident mollitia velit cum. Delectus sed quisquam quaerat nesciunt quos accusantium atque porro commodi possimus aperiam.</h1>
        </Grid>
        <Grid item xs={8}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas magni autem dolorem animi possimus. Itaque facere nemo, doloribus in blanditiis laborum dolor est consequuntur quaerat quia explicabo possimus hic.</h1>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}

export default App;
