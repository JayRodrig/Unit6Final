// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

export default class Show extends Component {
    state = {
        loggedIn: null,
        show: null,
        comments: [],
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

        axios.get(`http://localhost:11235/comment/${id}`)
            .then(response => response.data)
            .then(response => response.data)
            .then(comments => this.setState(state => ({
                comments: state.comments.concat(comments),
            })));
    }

    postComment = e => {
        e.preventDefault();
        const {value: comment_body,} = e.target.form[0];
        const {id: user_id, username} = this.state.loggedIn;
        const {show_id,} = this.state.show;
        const {comments,} = this.state;

        axios.post('http://localhost:11235/comment/', {
            comment_body,
            user_id, 
            show_id,
        })
            .then(_ => {
                comments.unshift({
                    comment_body,
                    show_id,
                    user_id,
                    username,
                });
                this.setState({
                    comments,
                });
            });
    }

    renderComments = _ => {
        const {comments,} = this.state;
        if (comments.length === 0) {
            return(
                <h1 className='text-center'>No Comments</h1>
            )
        } else {
            return(
                <div className="card" style={{"width": "100%"}}>
                    <div className="card-header text-center font-weight-bold bg-dark text-white">
                        Comments
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            comments.map((e, i) => {
                                return(
                                    <li className="list-group-item" key={i}><span className='font-weight-bold'>{e.username}:</span> {e.comment_body}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

    render() {
        return(
            <>
                {
                    (!this.state.loggedIn) ? <h1>Loading...</h1> : 
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
                                <h4>Being watched by {this.state.loggedIn.username}</h4>
                            </div>
                        </div>

                        <div className='row my-5' style={{justifyContent: 'center'}}>
                            <div className='col-6'>
                                <form>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Comment..." />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary bg-dark text-white" 
                                            type="button" id="button-addon2" onClick={this.postComment}>Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='row my-5' style={{justifyContent: 'center'}}>
                            <div className='col-6'>
                                {
                                    this.renderComments()
                                }
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}
