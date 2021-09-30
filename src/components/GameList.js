import React from 'react';
import Game from './Game.js';

export default function GameList({gameList}) {

return (
<table>
  <thead>
    <tr className="gameList_header">
      <th>Rank</th>
      <th> </th>
      <th>Title</th>
      <th><i class="fas fa-user-friends"></i></th>
      <th><i class="fas fa-clock"></i></th>
      <th><i class="far fa-calendar-alt"></i></th>
      <th>BGG</th>
      <th>User</th>
      <th>Own</th>
      {/* <i class="fas fa-house-user"></i> */}
    </tr>
  </thead>
  <tbody>
  {gameList.map((el,idx) => {
   return <tr className="gameList_row" key={idx}><Game gameObject={el}/></tr>
 })}
  </tbody>
</table>
);
}
