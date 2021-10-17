// import React, {useState, useEffect} from 'react';
import Header from './Header.js';
// import RandomGame from './RandomGame.js';
// import {getCollection} from '../api/operations';

export default function WhatToPlay() {
    let user = localStorage.getItem('userNameLS');
    // const [numberOfPlayers, setNumberOfPlayers] = useState('');
    // const [list, setList] = useState([]);
    // let newList = [];
    // let randomNumber = 0;
    // let game = [];
    // useEffect(() => {
    //     getCollection(user, setList);
    //     newList = list.filter((el) => numberOfPlayers >= el.minPlayers && numberOfPlayers <= el.maxPlayers && el.owned === true);
    //     randomNumber = Math.floor(Math.random() * (newList.length - 0)) + 0;
    //     console.log(randomNumber);
    //     console.log(newList[randomNumber]);
    //     game = newList[randomNumber];
    // },[numberOfPlayers]);

    return (
        <div>
            <Header userName={user}/>
            {/* <div className="container">
                <div>
                    <h3>How many players?</h3>
                    <input
                    type="text"
                    value={numberOfPlayers}
                    onInput={e => setNumberOfPlayers(e.target.value)}
                    placeholder="number of players">
                    </input>
                    <RandomGame game={game}/>
                </div>
            </div> */}
        </div>
    )
}

