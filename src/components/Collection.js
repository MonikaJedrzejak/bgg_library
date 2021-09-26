import React from 'react';
import { useParams } from 'react-router';
import Header from './Header.js';
import GameList from './GameList.js';

export default function Collection() {
    let { userName } = useParams();
    return (
        <>
        <Header userName={userName}/>
        <GameList userName={userName}/>
        </>
    )
}
