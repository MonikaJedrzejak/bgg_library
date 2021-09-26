import React, {useState} from 'react';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import GameList from './GameList.js';


export default function Main({history}) {
    const [user,setUser] = useState(null);

    return (
        <>
            <Header userName="Friend"/>
            <LoginForm user={setUser} history={history}/>
        </>
    )
}
