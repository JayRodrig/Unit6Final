// NPM MODULES
import React, {Component,} from 'react';
import {Route,} from 'react-router-dom';

// CONTAINERS
import Home from './containers/home';
import Users from './containers/users';
import UserProfile from './containers/user_profile';
import Show from './containers/show';

// COMPONENTS
import NavBar from './components/navbar';

class App extends Component {
  state = {
    loggedIn: null,
  }

  setLoggedIn = user => {
    this.setState({
      loggedIn: user,
    });
  }
  
  render() {
    return (
      <>
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Route path='/users/:user_id' exact component={UserProfile} />
        <Route path='/show/:id' exact component={Show} />
      </>
    );
  }
}

export default App;
