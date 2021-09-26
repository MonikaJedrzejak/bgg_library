import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './scss/main.scss';
import Main from './components/Main.js';
import Collection from './components/Collection.js';
import NotFound from './components/NotFound.js';


function App() {
    const [userName,setUserName] = useState(null);
    const [formData, setFormData] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(formData);
}

const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
};

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/collection" component={Collection}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}


export default App;

// return (
//     <div>
      
//         {!userName ? (
//         <>
//         <Header userProps={"Friend!"}/>
//         <form>
//                 <input
//                     type="text"
//                     name="username"
//                     value={formData}
//                     onChange={handleChange}
//                     placeholder="Enter a BGG username"
//                 />
//                 <button onClick={handleSubmit}>Submit</button>
//             </form>
//             </>
//              ) : (
//                  <div>
//                      <Header userProps={userName}/>
//                      <GameList userProps={userName}/>
//                  </div>
//                 )}
//     </div>
// )
// }


// export default App;
// import React from 'react';
// import './scss/main.scss';
// import LoginForm from './components/LoginForm';
// import GameList from './components/GameList.js';

// function App() {
//   return (
//     <>
//     <LoginForm/>
//     {/* <GameList userProps="bobry"/> */}
//     </>
//   );
// }

// // function App() {

// //   const [list, setList] = useState([]);

// //     useEffect(() => {
// //       fetch("https://bgg-json.azurewebsites.net/collection/bobry")
// //           .then((res) => {
// //               console.log(res);
// //               return res.json();
// //           })
// //           .then((data) => setList(data));
// //   }, []);

// //         console.log(`${list}`);

// // return (
// // <div>
// // <ul>
// //   {list.map(({ gameId, name}) => {
// //     return <li key={gameId}>{gameId} {name}</li>
// //   })}
// // </ul>
// // </div>
// // );
// // }
// export default App;