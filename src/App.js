import React, {useState} from 'react';
import './scss/main.scss';
import GameList from './components/GameList.js';
import Header from './components/Header.js';

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
        <div>
          
            {!userName ? (
            <>
            <Header userProps={"Friend!"}/>
            <form>
                    <input
                        type="text"
                        name="username"
                        value={formData}
                        onChange={handleChange}
                        placeholder="Enter a BGG username"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
                </>
                 ) : (
                     <div>
                         <Header userProps={userName}/>
                         <GameList userProps={userName}/>
                     </div>
                    )}
        </div>
    )
}


export default App;


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