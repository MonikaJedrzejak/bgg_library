// import React, {useState, useEffect} from 'react'
// import {getCollection} from '../api/operations';

// export default function RandomGame({numberOfPlayers, userName}) {
//     const [list, setList] = useState([]);
//     let newList = [];
//     let randomNumber = 0;
//     let game = [];
//     useEffect(() => {
//         getCollection(userName, setList);
//         newList = list.filter((el) => numberOfPlayers >= el.minPlayers && numberOfPlayers <= el.maxPlayers);
//         randomNumber = Math.floor(Math.random() * (newList.length - 0)) + 0;
//         console.log(randomNumber);
//         console.log(newList[randomNumber]);
//         game = newList[randomNumber];
//     },[numberOfPlayers]);
//     const {name, id} = game;
   
//     return (
//         <div>
//             <span>{name}</span>
//             <h2>{id}</h2>
//         </div>
//     )
// }
