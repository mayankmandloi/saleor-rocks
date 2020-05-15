import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './ProductCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

// As we are passing JSON in nodes to keep it scalable its type is any 
export default function AutoGrid(props: { nodes: {node: {id: string| undefined; name:string| undefined; description: string| undefined; images:{id:string| undefined; url:string| undefined; alt:string| undefined}[]}}[]; }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {props.nodes.map((node: {node: {id: string| undefined; name:string| undefined; description: string| undefined; images:{id:string| undefined; url:string| undefined; alt:string| undefined}[]}}) => <Grid item xs={4}>
          <MediaCard node={node.node}/>
        </Grid>)}
      </Grid>
      </div>
  );
}
