import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes ,Route
} from "react-router-dom";

import Monitoring from './app/components/Monitoring';
import Report from './app/components/Report';
import Settings from './app/components/Settings';
import ControlloFlussi from './app/components/ControlloFlussi';

const App = (props) => {

  //const history = createBrowserHistory();
  const { classes } = props;
  return (
   
      <Router>
        <Routes>
            <Route exact path="/monitoring" element={<Monitoring/>} /*classes={classes}*//>
            <Route exact path="/report" element={<Report/>} /*classes={classes}*//>
            <Route exact path="/settings" element={<Settings/>} /*classes={classes}*//>
            <Route exact path="/controlloFlussi" element={<ControlloFlussi/>} /*classes={classes}*//>
        </Routes>
    </Router>

  );
}

App.defaultProps = {
  componentTitle: 'Picasso Component'
}

App.propTypes = {
  componentTitle: PropTypes.string
};

export default App;
