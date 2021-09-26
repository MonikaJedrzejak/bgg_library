import React from 'react';
import { useParams } from 'react-router';
import Header from './Header.js';
import GameList from './GameList.js';
import DataBar from './DataBar';

export default function Collection() {
    let { userName } = useParams();
    return (
        <>
        <Header userName={userName}/>
        <DataBar/>
        <GameList userName={userName}/>
        </>
    )
}
