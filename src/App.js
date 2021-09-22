import React from 'react';
import './scss/main.scss';
import LoginForm from './components/LoginForm';
import GameList from './components/GameList.js';

function App() {
  return (
    <>
    <LoginForm/>
    {/* <GameList userProps="bobry"/> */}
    </>
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
