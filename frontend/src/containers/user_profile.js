// NPM MODULES
import React, {Component,} from 'react';
import {Link,} from 'react-router-dom';
import axios from 'axios';

// COMPONENTS


export default class UserProfile extends Component {
    state = {
        loggedIn: null,
        shows: [],
    }

    componentDidMount = _ => this.loadUserData();

    loadUserData = _ => {
        const {user_id,} = this.props.match.params;
        axios.get(`http://localhost:11235/user/${user_id}`)
            .then(response => response.data)
            .then(response => response.data)
            .then(user => this.setState({
                loggedIn: user,
            }));

        axios.get(`http://localhost:11235/show/user/${user_id}`)
            .then(response => response.data)
            .then(response => response.data)
            .then(shows => this.setState(state => ({
                shows: state.shows.concat(shows),
            })));
    }

    renderPage = _ => {
        const {shows,} = this.state;
        return(
            <div className='container'>
                <div className='row text-center'>
                    {
                        shows.map((e, i) => {
                            return(
                                <Link to={`/show/${e.show_id}`} key={i} className='col-6 my-3' style={{
                                    textDecoration: 'none',
                                    color: 'black'
                                }}>
                                    <div>
                                        <img src={e.img_url} alt={e.title} style={{maxWidth: 400, maxHeight: 550}} />
                                        <h3 className='my-1'>{e.title}</h3>
                                        <h5 className='my-1'>{e.genre_name}</h5>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
 
    render() {
        return(
            <>
                {
                    this.renderPage()
                }
            </>
        )
    }
}