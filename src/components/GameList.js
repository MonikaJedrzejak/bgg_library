import React, {useState, useEffect} from 'react';
import Game from './Game.js';

export default function GameList({userProps}) {
    const [user, setUser] = useState(userProps);

    const [list, setList] = useState([]);

      useEffect(() => {
        fetch(`https://bgg-json.azurewebsites.net/collection/${user}`)
            .then((res) => {
                console.log(res);
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