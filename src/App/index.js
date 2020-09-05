import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import styles from './styles.module.css';

import Navigation from '../Navigation';
import User from '../User';
import Home from '../Home';
import { AutoSaveContext, AutoSaveIndicator } from '../AutoSave';

const App = () => {
  const [isAutoSaving, setIsAutoSaving] = React.useState(false);

  return (
    <Router>
      <AutoSaveContext.Provider
        value={{ isAutoSaving, setIsAutoSaving }}
      >
        <div className={styles.container}>
          <AutoSaveIndicator />

          <Navigation />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <User />
            </Route>
          </Switch>
        </div>
      </AutoSaveContext.Provider>
    </Router>
  );
};

export default App;
