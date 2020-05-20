import React, { Dispatch, SetStateAction } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MediaCard from './ProductCard'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
)

export default function AutoGrid(props: {
  nodes: {
    node: {
      id: string
      name: string
      description: string
      images: { id: string; url: string; alt: string }[]
    }
  }[]
  setCurrentNode: Dispatch<
    SetStateAction<{
      id: string
      name: string
      description: string
      images: { id: string; url: string; alt: string }[]
    }>
  >
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {props.nodes.map(
          (node: {
            node: {
              id: string
              name: string
              description: string
              images: { id: string; url: string; alt: string }[]
            }
          }) => (
            <Grid item sm={4} xs={12} key={node.node.id}>
              <MediaCard
                node={node.node}
                setCurrentNode={props.setCurrentNode}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  )
}
