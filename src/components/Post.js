import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: '#262626'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  date: {
    fontSize: 14,
    color: '#0397e9',

  },

  highLight: {
    color: theme.palette.text.highLight,
    borderBottom: "1px solid white",
    paddingBottom: '10px'
  }
}));

export default function Post(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const today = new Date();
  const post = props.data
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          {today.toUTCString()}
        </Typography>
        <Typography className={classes.title} component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.highLight} variant="body3" component="p" >
          {post.body}
        </Typography>
      </CardContent>
      <CardActions >
        <Typography component="p">#BTC #Bitcoin</Typography>
      </CardActions>
    </Card >
  );
}