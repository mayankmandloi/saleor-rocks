import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  createStyles,
  Grid,
  Container,
  CircularProgress
} from '@material-ui/core'
import './App.css'
import { LeftMenuWrapper } from './view/leftmenu/left-menu-wrapper'
import PostCard01 from './view/mainsection/productcatlog/ProductCatlog'
import { ProductPreview } from './view/mainsection/productpreview/ProductPreview'

function App() {
  const [nodes, setNodes] = useState({
    data: {
      products: {
        edges: []
      }
    }
  })

  const [currentNode, setCurrentNode] = useState({
    id: '',
    name: '',
    description: '',
    images: [
      {
        id: '',
        url: '',
        alt: ''
      }
    ]
  })
  const getData = async () => {
    const data = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `mutation {
            tokenCreate(email: "admin@example.com", password: "admin") {
              token
            }
          }`
      })
    })
    const jsonData = await data.json()
    const { token } = jsonData.data.tokenCreate

    const juiseData = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
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
          }`
      })
    })
    const nodesList = await juiseData.json()
    setNodes(nodesList)
    setCurrentNode(nodesList.data.products.edges[0].node)
  }

  useEffect(() => {
    getData()
  }, [])
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        flexGrow: 1
      },
      loaderRoot: {
        display: 'flex',
        justify: 'center',
        'align-items': 'center'
      }
    })
  )
  const classes = useStyles()

  const mainSection = () => {
    if (nodes.data.products.edges.length) {
      return (
        <>
          <Grid item md={3} xs={5}>
            <ProductPreview selectedNode={currentNode} />
          </Grid>
          <Grid item md={8} xs={6}>
            <PostCard01
              nodes={nodes.data.products.edges}
              setCurrentNode={setCurrentNode}
            />
          </Grid>
        </>
      )
    }
    return (
      <Grid
        item
        xs={11}
        className={classes.loaderRoot}
      >
        <CircularProgress size="60vh" />
      </Grid>
    )
  }
  return (
    <Container maxWidth="xl" data-testid="mainContainer">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <LeftMenuWrapper />
          </Grid>
          {mainSection()}
        </Grid>
      </div>
    </Container>
  )
}

export default App
