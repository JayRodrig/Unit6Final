// NPM MODULES
import React, {Component,} from 'react';
import {Route,} from 'react-router-dom';

// CONTAINERS
import Home from './containers/home';
import Users from './containers/users';
import UserProfile from './containers/user_profile';

// COMPONENTS
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Route path='/users/:user_id' exact component={UserProfile} />
      </>
    );
  }
}

export default App;
