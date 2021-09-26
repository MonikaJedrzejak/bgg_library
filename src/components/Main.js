import React from 'react';
import Header from './Header.js';
import LoginForm from './LoginForm.js';

export default function Main() {
    return (
        <div>
            <Header userProps={"Friend!"}/>
            <LoginForm/>
        </div>
    )
}
