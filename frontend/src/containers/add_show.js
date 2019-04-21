// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

export default class AddShow extends Component {
    state = {
        title: '',
        img_url: '',
        genre_id: '',
        user_id: '',
        genres: [],
        users: [],
        postedShow: false,
    }

    componentDidMount = async () => {
        const genresCall = await axios.get('http://localhost:11235/genre');
        const usersCall = await axios.get('http://localhost:11235/user')
        
        const {data: genres,} = genresCall.data;
        const {data: users,} = usersCall.data;

        this.setState({
            genres,
            users,
        });
    }

    handleInputChange = e => this.setState({
        [e.target.name]: e.target.value,
    });

    handleSumbit = e => {
        e.preventDefault();    
        const {value: title,} = e.target.form[0];
        const {value: img_url,} = e.target.form[1];
        const {value: genre_id,} = e.target.form[2];
        const {value: user_id,} = e.target.form[3];

        axios.post('http://localhost:11235/show/', {
            title, 
            img_url,
            user_id,
            genre_id,
        });

        this.setState((state) => ({
            postedShow: true,
        }));
    }

    renderPage = _ => {
        const {postedShow, genres, users} = this.state;
        if (postedShow) {
            return(
                <div className='container'>
                    <div className='row'>
                        <div className="alert alert-success col-12 text-center mt-3" role="alert">
                            Successfully posted show!
                        </div>
                        <div className='col-12 text-center my-5 border-bottom border-dark p-3'>
                            <h1>Add a new show...</h1>
                        </div>

                        <div className='col-12 text-center'>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" name='title' className="form-control" placeholder="Show Name..." onChange={this.handleInputChange} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" name='img_url' className="form-control" placeholder="Image URL..." onChange={this.handleInputChange} />
                                </div>

                                <div className="input-group mb-3">
                                    <select className="custom-select" name='genre_id' id="inputGroupSelect04" aria-label="Example select with button addon" onChange={this.handleInputChange}>
                                        <option defaultValue>Choose Genre...</option>
                                        {
                                            genres.map((e, i) => {
                                                return(
                                                    <option value={e.id} key={i}>{e.genre_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="input-group mb-3 border-bottom border-dark pb-5">
                                    <select className="custom-select" name='user_id' id="inputGroupSelect04" aria-label="Example select with button addon" onChange={this.handleInputChange}>
                                        <option defaultValue>Choose User...</option>
                                        {
                                            users.map((e, i) => {
                                                return(
                                                    <option value={e.id} key={i}>{e.username}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg my-3" onClick={this.handleSumbit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center my-5 border-bottom border-dark p-3'>
                            <h1>Add a new show...</h1>
                        </div>

                        <div className='col-12 text-center'>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" name='title' className="form-control" placeholder="Show Name..." onChange={this.handleInputChange} />
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" name='img_url' className="form-control" placeholder="Image URL..." onChange={this.handleInputChange} />
                                </div>

                                <div className="input-group mb-3">
                                    <select className="custom-select" name='genre_id' id="inputGroupSelect04" aria-label="Example select with button addon" onChange={this.handleInputChange}>
                                        <option defaultValue>Choose Genre...</option>
                                        {
                                            genres.map((e, i) => {
                                                return(
                                                    <option value={e.id} key={i}>{e.genre_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="input-group mb-3 border-bottom border-dark pb-5">
                                    <select className="custom-select" name='user_id' id="inputGroupSelect04" aria-label="Example select with button addon" onChange={this.handleInputChange}>
                                        <option defaultValue>Choose User...</option>
                                        {
                                            users.map((e, i) => {
                                                return(
                                                    <option value={e.id} key={i}>{e.username}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-dark btn-lg my-3" onClick={this.handleSumbit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }  
    }
 
    render() {
        return(
            this.renderPage()
        )
    }
}