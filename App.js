import logo from './logo.svg';
// import React, {useEffect, useState} from "react";
import './App.css';
// import Mtable from './components/muitable'
// import Mtable1 from './components/materialtable'

//import Table from './components/table';
//import { render } from '@testing-library/react';
// import Uploaddata from './components/upload'
//import Agdata from './components/agtrail'
//import Dataupload from './components/dataupload'
//import Tabledata from './components/Tablereal'
//import SimpleTable from './components/tableworking'
//import { Tab, ToggleOnRounded } from '@material-ui/icons';
// import SimpleTable from './components/tableworking';
// import SimpleTable1 from './components/tablecopy'
//import SimpleTable2 from './components/checkboxtable'
// import Toggle from './components/tabletoggle'
// import Toggledummy from './components/dummy'
//import Sorting from './components/sorting';
// import Toggle1 from './components/sorting1'
// import chart from './components/chart'
// import Highreact from './components/highchartapi';
// import Scatter from './components/scatter';
// import Graph from './components/Graphtrail';
// import Histgoogle from './components/googlechart';
// import Box from './components/boxplot';
// import Crosstab from './components/crosstab';
// import Histogramhigh from './components/Histogramhigh';
import Corre from './components/Corrchart'
// import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
function App() {
  return (

    <div className={App}>
      {/* <Graph />
      <Scatter />
      <Histgoogle />
      <Box />
      <Crosstab /> */}
      <Corre/>
      {/* <Histogramhigh/> */}
      {/* <Router>
        <Switch>
          <Route exact path="/graphtrail" component={Graph}></Route>
          <Route exact path="/googlechart" component={Histgoogle}></Route>

        </Switch>
      </Router> */}
    </div>
  )
}

export default App;
