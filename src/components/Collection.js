import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Header from './Header.js';
import GameList from './GameList.js';
import DataBar from './DataBar';

export default function Collection() {
    let { userName } = useParams();
    const [list, setList] = useState([]);

      useEffect(() => {
        fetch(`https://bgg-json.azurewebsites.net/collection/${userName}`)
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((data) => setList(data));
    }, [userName]);

    return (
        <>
        <Header userName={userName}/>
        <DataBar gameList={list}/>
        <div className="container">
            <GameList userName={userName} gameList={list}/>
        </div>
        </>
    )
}
