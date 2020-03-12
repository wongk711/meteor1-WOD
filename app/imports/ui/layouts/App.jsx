import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ThreePeaks from '../pages/ThreePeaks';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ThreePeaks}/>
            </Switch>
          </div>
        </Router>
    );
  }
}
