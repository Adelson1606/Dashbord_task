import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),

  }
}));

export default function ColumnGap({children}) {
  const classes = useStyles()
  return (
    <div className={classes.box}>
      {children}
    </div>
  )
}
