import React, {useState, useEffect} from 'react';
import './scss/main.scss';
import Game from './components/Game.js';

function App() {
      const [user, setUser] = useState("ervwalter");

      const [list, setList] = useState([]);
 
        useEffect(() => {
          fetch(`https://bgg-json.azurewebsites.net/collection/${user}`)
              .then((res) => {
                  console.log(res);
                  return res.json();
              })
              .then((data) => setList(data));
      }, []);

            console.log(`${list}`);

  return (
  <div>
    <ul>
      {list.map((el) => {
     return <li><Game gameObject={el}/></li>
   })}
   </ul>

      {/* {list.map(({gameId, name, image, thumbnail, minPlayers, maxPlayers,playingTime, isExpansion, yearPublished, bggRating, averageRating, rank, numPlays, rating, owned, preOrdered, forTrade, previousOwned, want, wantToPlay, wantToBuy, wishList, userComment}) => {
        return <li key={gameId}><Game gameId={gameId} name={name} image={image} thumbnail={thumbnail} minPlayers={minPlayers} maxPlayers={maxPlayers} playingTime={playingTime} isExpansion={isExpansion} yearPublished={yearPublished} bggRating={bggRating} averageRating={averageRating} rank={rank} numPlays={numPlays} rating={rating} owned={owned} preOrdered={preOrdered} forTrade={forTrade} previousOwned={previousOwned} want={want} wantToPlay={wantToPlay} wantToBuy={wantToBuy} wishList={wishList} userComment={userComment}></Game></li>
      })} */}
    
  </div>
  );
}

// function App() {

//   const [list, setList] = useState([]);

//     useEffect(() => {
//       fetch("https://bgg-json.azurewebsites.net/collection/bobry")
//           .then((res) => {
//               console.log(res);
//               return res.json();
//           })
//           .then((data) => setList(data));
//   }, []);

//         console.log(`${list}`);

// return (
// <div>
// <ul>
//   {list.map(({ gameId, name}) => {
//     return <li key={gameId}>{gameId} {name}</li>
//   })}
// </ul>
// </div>
// );
// }




export default App;
