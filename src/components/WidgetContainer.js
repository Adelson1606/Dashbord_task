import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  left: {
    padding: theme.spacing(1, 2)
  },
  right: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    placeContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.background.background2,
    color: theme.palette.text.secondary

  },
  headerBox: {
    display: 'flex'
  },
  gridCell: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper
  },
  content: {
    padding: theme.spacing(1)
  }
}));

export default function WidgetContainer({ title, children, size }) {
  const classes = useStyles();

  return (
    <Grid item sm={size} xs={12}>
      <div className={classes.gridCell}>
        <div className={classes.headerBox} >
          <div className={classes.left}>{title}</div>
          <div className={classes.right}> <OpenWithIcon fontSize="small" /> <CloseIcon fontSize="small" /> </div>
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </Grid>
  )
}
