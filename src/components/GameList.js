import React, {useState, useEffect} from 'react';
import Game from './Game.js';

export default function GameList({userName}) {
    const [user, setUser] = useState("");
    const [list, setList] = useState([]);
    setUser(userName);

      useEffect(() => {
        fetch(`https://bgg-json.azurewebsites.net/collection/${user}`)
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((data) => setList(data));
    }, []);

          // console.log(`${list}`);

return (
<div>
  <ul>
    {list.map((el,idx) => {
   return <li key={idx}><Game gameObject={el}/></li>
 })}
 </ul>
</div>
);
}