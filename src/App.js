import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Users from './Users';
import Home from './Home';
import AutoSaveContext from './AutoSaveContext';
import AutoSaveIndicator from './AutoSaveIndicator';

const style = {
  position: 'relative',
};

const App = () => {
  const [isAutoSaving, setIsAutoSaving] = React.useState(false);

  return (
    <Router>
      <AutoSaveContext.Provider
        value={{ isAutoSaving, setIsAutoSaving }}
      >
        <div style={style}>
          <AutoSaveIndicator />

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

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
