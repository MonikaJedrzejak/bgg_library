import React from 'react';
import Header from './Header.js';
// import RandomGame from './RandomGame.js';

export default function WhatToPlay() {
    let user = localStorage.getItem('userNameLS');
    // const [numberPlayers, setNumberPlayers] = useState('')
    return (
        <div>
            <Header userName={user}/>
            {/* <div className="container">
                <div>
                    <h3>How many players?</h3>
                    <input
                    type="text"
                    value={numberPlayers}
                    onInput={e => setNumberPlayers(e.target.value)}
                    placeholder="number of players">
                    </input>
                    <RandomGame numberOfPlayers={numberPlayers} userName={user}/>
                </div>
            </div> */}
        </div>
    )
}

