import React from 'react';
import Header from './Header.js';

export default function WhatToPlay() {
    let user = localStorage.getItem('userNameLS');
    return (
        <div>
            <Header userName={user}/>
        </div>
    )
}

