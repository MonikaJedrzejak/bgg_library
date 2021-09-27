import React from 'react';
import Game from './Game.js';

export default function GameList({gameList}) {

return (
<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th> </th>
      <th>Title</th>
      <th>BGG</th>
      <th>User</th>
      <th>Expansion</th>
    </tr>
  </thead>
  <tbody>
  {gameList.map((el,idx) => {
   return <tr key={idx}><Game gameObject={el}/></tr>
 })}
  </tbody>
</table>
);
}
