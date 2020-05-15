import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, CssBaseline, Container } from '@material-ui/core';
import './App.css';
import { LeftMenuWrapper } from './view/leftmenu/left-menu-wrapper';
import PostCard01 from './view/mainsection/productcatlog/ProductCatlog';

function App() {
  const getData = async () => {
    const data = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `mutation {
            tokenCreate(email: "admin@example.com", password: "admin") {
              token
            }
          }`,
        }),
      });
      const jsonData = await data.json();
      const token: String = jsonData.data.tokenCreate.token;

      const juiseData = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({
          query: `query {
            products(first: 5) {
              edges {
                node {
                  id
                  name
                  description
                  images {
                    id
                    url
                    alt
                  }
                }
              }
            }
          }`,
        }),
      })
      const nodesList = await juiseData.json();
      console.log(nodesList);
      setNodes(nodesList);
  };

  const [nodes, setNodes] = useState({
    data: {
      products: {
        edges:[]
      }
    }
  });

  useEffect(() => {
    getData();
  }, [])
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
        <PostCard01 nodes={nodes.data.products.edges}/>
        </Grid>
      </Grid>
    </div>
    </Container>
  );
}

export default App;
