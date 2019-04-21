// NPM MODULES
import React, {Component,} from 'react';
import {Route,} from 'react-router-dom';

// CONTAINERS
import Home from './containers/home';
import Users from './containers/users';
import UserProfile from './containers/user_profile';
import Show from './containers/show';
import TvShows from './containers/tvshows';
import AddShow from './containers/add_show';

// COMPONENTS
import NavBar from './components/navbar';

class App extends Component {
  state = {
    loggedIn: null,
  }
  
  render() {
    return (
      <>
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/users' exact component={Users} />
        <Route path='/users/:user_id' exact component={UserProfile} />
        <Route path='/show/:id' exact component={Show} />
        <Route path='/shows' exact component={TvShows} />
        <Route path='/addshow' exact component={AddShow} />
      </>
    );
  }
}

export default App;
