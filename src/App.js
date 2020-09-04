import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Users from './Users';
import Home from './Home';
import AutoSaveContext from './AutoSaveContext';
import AutoSaveIndicator from './AutoSaveIndicator';

const containerStyle = {
  position: 'relative',
};

const App = () => {
  const [isAutoSaving, setIsAutoSaving] = React.useState(false);

  return (
    <Router>
      <AutoSaveContext.Provider
        value={{ isAutoSaving, setIsAutoSaving }}
      >
        <div style={containerStyle}>
          <AutoSaveIndicator />

          <Navigation />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </AutoSaveContext.Provider>
    </Router>
  );
};

export default App;
