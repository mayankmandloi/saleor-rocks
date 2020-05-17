import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
    },
    root: {
        position: 'sticky',
        top: 0
    }
  }),
);

export const ProductPreview = function (props: {selectedNode: {id: string| undefined; name:string| undefined; description: string| undefined; images:{id:string| undefined; url:string| undefined; alt:string| undefined}[]}}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={props.selectedNode.images[0].url} alt={props.selectedNode.images[0].alt} className={classes.image}/>
            <h1>{props.selectedNode.name}</h1>
            <p>{props.selectedNode.description}</p>
        </div>
    )
}