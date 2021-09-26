import React from 'react';
import {Link} from 'react-router-dom';

export default function Header({userName}) {
    return (
        <header className="header">
            <div className="container header_container">
                <span className="header_userInfo">Hello {userName}</span>
                <nav className="header_nav">
                    <Link className="header_nav__item" to={`/collection/user/${userName}`}>Collection</Link>
                    <Link className="header_nav__item" to="/random">What to play? </Link>
                    <Link className="header_nav__item" to="/">Log Out</Link>
                </nav>
            </div>
        </header>
    )
}
