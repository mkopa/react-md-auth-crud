import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from './components';

import Home from './views';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}];

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="Menu"
            toolbarTitle="Simple crud"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
