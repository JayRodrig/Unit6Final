// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';
import {Link,} from 'react-router-dom';

/* 
    TODO:
    * REFACTOR RENDER FUNCTION, BREAK UP JSX INTO COMPONENTS.
*/

export default class TvShows extends Component {
    state = {
        shows: null,
    }

    componentDidMount = _ => this.loadShows();

    loadShows = () => {
        axios.get('http://localhost:11235/show/')
            .then(response => response.data)
            .then(response => response.data)
            .then(shows => {
                const showsArr = [];
                const showsObj = {};
                
                for (let show of shows) {
                    if (!showsObj[show.title]) {
                        showsObj[show.title] = {
                            show, 
                            users: [{username: show.username, user_id: show.user_id}],
                        };
                    } else {
                        showsObj[show.title].users.push({
                            username: show.username, 
                            user_id: show.user_id,
                        });
                    }
                }

                const showsObjK = Object.keys(showsObj);

                for (let key of showsObjK) { 
                    showsArr.push(showsObj[key]);
                }

                this.setState({
                    shows: showsArr,
                });
            });
    }

    render() {
        const {shows,} = this.state;
        
        return(
            <>
                <div className='container my-5'>
                    <div className='row'>
                        {
                            (!shows) ? <h1>Loading...</h1> : 
                                shows.map((e, i) => {
                                    return(
                                        <>
                                            <div className='col-4 mb-5' key={i}>
                                                <div className="card" style={{"width": "18rem"}}>
                                                    <img className="card-img-top" src={e.show.img_url} alt='' />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{e.show.title}</h5>
                                                    </div>
                                                    <ul className="list-group list-group-flush">
                                                        {
                                                            e.users.map((e, i) => {
                                                                return(                                                                    
                                                                    <li className="list-group-item" key={i}>
                                                                        <Link to={`/users/${e.user_id}`} key={i} style={{textDecoration: 'none', color: 'black'}}>
                                                                            {e.username}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>
            </>
        )
    }
}