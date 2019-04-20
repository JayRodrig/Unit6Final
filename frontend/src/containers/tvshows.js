// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

// COMPONENTS


export default class TvShows extends Component {
    state = {

    }

    componentDidMount = _ => this.loadShows();

    loadShows = () => {
        axios.get('http://localhost:11235/show/')
            .then(response => response.data)
            .then(response => response.data)
            .then(console.log);
    }

    render() {
        return(
            <h1>This is the tv shows page</h1>
        )
    }
}