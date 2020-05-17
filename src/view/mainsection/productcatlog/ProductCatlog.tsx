import React, { Dispatch, SetStateAction } from 'react';
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
export default function AutoGrid(props: { nodes: {node: {id: string; name:string; description: string; images:{id:string; url:string; alt:string}[]}}[]; setCurrentNode: Dispatch<SetStateAction<{ id: string; name: string; description: string; images: { id: string; url: string; alt: string; }[]; }>> }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {props.nodes.map((node: {node: {id: string; name:string; description: string; images:{id:string; url:string; alt:string}[]}}) => <Grid item sm={4} xs={12}>
          <MediaCard node={node.node} setCurrentNode={props.setCurrentNode}/>
        </Grid>)}
      </Grid>
      </div>
  );
}
