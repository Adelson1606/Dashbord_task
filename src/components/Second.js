import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ColumnGap from './ColumnGap';


const useStyles = makeStyles(theme => ({

  tabs: {
    flexGrow: 1,
    maxWidth: 300,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#262626',
    margin: 0,
    flex: 1

  },
  selectEmpty: {
    marginTop: theme.spacing(2),

  },
  button:
    theme.palette.action.button,



  buttonBox: {
    display: 'flex',
    placeContent: "center",
    padding: theme.spacing(1)
  },
  input: {
    display: 'flex',
    backgroundColor: '#262626',
    padding: theme.spacing(0, 1)
  }
}));

export default function Second() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  return (

    <ColumnGap>
      <Paper square className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="SELL" ></Tab>
          <Tab label="BUY" ></Tab>
        </Tabs>
      </Paper>


      <div className={classes.input}>
        <FormControl className={classes.formControl}>
          <Select
            value={age}
            onChange={handleChange2}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>Product</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

        </FormControl>
      </div>
      <div className={classes.input}>
        <TextField type="number" label="Quantity" />
      </div>


      <div className={classes.buttonBox} >
        <Button className={classes.button}>Add</Button>
      </div>
    </ColumnGap>


  );
}