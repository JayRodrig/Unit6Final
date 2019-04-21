// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

// COMPONENTS


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
                console.log(shows);
                const showsObj = {};
                for (let show of shows) {
                    if (!showsObj[show.title]) {
                        showsObj[show.title] = [show.user_id];
                    } else {
                        showsObj[show.title].push(show.user_id);
                    }
                }
                
                console.log(Object.values(showsObj));

                // this.setState({
                //     shows: showsObj,
                // });
            });
    }

    render() {
        return(
            <h1>This is the tv shows page</h1>
        )
    }
}