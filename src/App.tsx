import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, CssBaseline, Container, CircularProgress } from '@material-ui/core';
import './App.css';
import { LeftMenuWrapper } from './view/leftmenu/left-menu-wrapper';
import PostCard01 from './view/mainsection/productcatlog/ProductCatlog';
import { ProductPreview } from './view/mainsection/productpreview/ProductPreview';

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
            products(first: 12) {
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
      setNodes(nodesList);
      console.log(nodesList.data.products.edges[0]);
      setCurrentNode(nodesList.data.products.edges[0].node)
  };

  const [nodes, setNodes] = useState({
    data: {
      products: {
        edges:[]
      }
    }
  });

  const [currentNode, setCurrentNode] = useState({
    id: '',
    name: '',
    description: '',
    images: [{
      id: '',
      url: '',
      alt: ''
    }]
  });

  useEffect(() => {
    getData();
  }, [])
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    loaderRoot: {
      display: 'flex'
    }
  }),
);
const classes = useStyles();

const mainSection = () => {
  if(Boolean(nodes.data.products.edges.length)){
    return <>
    <Grid item md={3} xs={5}><ProductPreview selectedNode={currentNode}/></Grid>
    <Grid item md={8} xs={6}>
    <PostCard01 nodes={nodes.data.products.edges}  setCurrentNode={setCurrentNode}/>
    </Grid></>
  }
   return <Grid item xs={11} justify="center" alignItems="center" className={classes.loaderRoot}>
      <CircularProgress size="60vh" />
      </Grid>;
}
  return (
    <Container maxWidth="xl" data-testid="mainContainer">
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <LeftMenuWrapper></LeftMenuWrapper>
        </Grid>
        {mainSection()}
      </Grid>
    </div>
    </Container>
  );
}

export default App;
