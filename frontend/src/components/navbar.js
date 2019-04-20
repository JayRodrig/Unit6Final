import React from 'react';
import {Link,} from 'react-router-dom';

export default props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand text-white font-weight-bold" to="/">TV Show Watchlist</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/shows">TV Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#">Genres</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}