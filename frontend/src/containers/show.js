// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

// COMPONENTS


export default class Show extends Component {
    state = {
        loggedIn: null,
        show: null,
    }

    componentDidMount = () => this.loadShowData();

    loadShowData = () => {
        const {id,} = this.props.match.params;
        axios.get(`http://localhost:11235/show/${id}`)
            .then(response => response.data)
            .then(response => response.data)
            .then(show => this.setState({
                show,
            }, () => {
                axios.get(`http://localhost:11235/user/${show.user_id}`)
                    .then(response => response.data)                    
                    .then(response => response.data)                    
                    .then(user => this.setState({
                        loggedIn: user,
                    }));                    
            }));
    }

    render() {
        return(
            <>
                {
                    (!this.state.show) ? <h1>Loading...</h1> : 
                    <div className='container'>
                        <div className='row my-5 border-bottom'>
                            <div className='col-4'>
                                <img src={this.state.show.img_url} alt='show poster' style={{width: '100%', height: 'auto'}} />
                            </div>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-12 my-5'>
                                        <h1 className='mt-2'>{this.state.show.title}</h1>
                                        <h3 className='mt-2'>{this.state.show.genre_name}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 my-2 text-center'>
                                <h4>Being watch by Someone</h4>
                            </div>
                        </div>

                    </div>
                }
            </>
        )
    }
}
