import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WidgetContainer from './components/WidgetContainer'
import First from './components/First'
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth'



const data = require('./data.json')


const globalTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#1a1a1a",
      background2: '#262626'
    },
    text: {
      highLight: "#be7811"
    },
    action: {
      button: {
        backgroundColor: "#0a70aa"
      }
    }
  }
});


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    padding: '1vh',
    boxSizing:"borderBox",
    backgroundColor: globalTheme.palette.background.default
  },
  tableTitle: {
    color: globalTheme.palette.text.disabled


  },
}));


function App() {

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={globalTheme}>

      <div className={classes.root}>
        <Grid container spacing={2}
          direction="row"
          justify="space-evenly"
          alignItems="stretch">

          <WidgetContainer title={'First'} size={6} >
            <First firstData={data.thirdBox}/>
          </WidgetContainer>

          <WidgetContainer title={'Second'} size={2} >
            <Second />
          </WidgetContainer>

          <WidgetContainer title={'Third'} size={4} >
            <Third thirdData={data.firstBox}/>
          </WidgetContainer>


          <WidgetContainer title={'Fourth'} size={3} >
            <Fourth fourthData={data.fifthBox}/>
          </WidgetContainer> 

          <WidgetContainer title={'Fifth'} size={6} >
            <Fifth/>
          </WidgetContainer>

          <WidgetContainer title={'Sixth'} size={3} >
            <Sixth sixthData={data.fifthBox}/>
          </WidgetContainer>

        
          
        </Grid>
      </div>

    </MuiThemeProvider>

  );
}

export default App;
