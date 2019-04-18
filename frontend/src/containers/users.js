// NPM MODULES
import React, {Component,} from 'react';
import {Link,} from 'react-router-dom';
import axios from 'axios';

export default class Users extends Component {
    state = {
        users: [],
    }

    componentDidMount = _ => this.loadUsers();

    loadUsers = _ => {
        axios.get('http://localhost:11235/user/')
            .then(response => response.data)
            .then(response => response.data)
            .then(userArr => {
                this.setState((state) => ({
                    users: state.users.concat(userArr),
                }));
            });
    }

    renderPage = _ => {
        const {users,} = this.state;
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mt-5 mb-3'>
                            <p className='font-weight-bold'>Please select a user below to see their shows:</p>
                        </div>
                        <div className='col-12'>
                                {
                                    users.map((e, i) => {
                                        return(
                                            <Link key={i} to={`/users/${e.id}`} style={{
                                                display: 'block',
                                                textDecoration: 'none',
                                                color: 'black'
                                        }}>{e.username}</Link>
                                        );
                                    })
                                } 
                        </div>
                    </div> 
                </div>
            );
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