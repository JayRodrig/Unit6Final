// NPM MODULES
import React, {Component,} from 'react';
import axios from 'axios';

// COMPONENTS


export default class UserProfile extends Component {
    state = {

    }

    componentDidMount = () => {
        const {user_id,} = this.props.match.params;
        axios.get(`http://localhost:11235/show/user/${user_id}`)
            .then(response => response.data)
            .then(response => response.data)
            .then(console.log)
    }

    render() {
        return(
            <h1>This is the user profile page</h1>
        )
    }
}