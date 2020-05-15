import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    '&:hover': {
        div: {
            'background-size': 'contain'
        },
     },
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props: {node: {id: string| undefined; name:string| undefined; description: string| undefined; images:{id:string| undefined; url:string| undefined; alt:string| undefined}[]}}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.node.images[0].url}
          title={props.node.images[0].alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.node.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
