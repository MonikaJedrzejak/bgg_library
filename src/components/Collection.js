import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Header from './Header.js';
import GameList from './GameList.js';
import DataBar from './DataBar';
import {getCollection} from '../api/operations';

export default function Collection() {
    let { userName } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        getCollection(userName, setList);
    }, [userName]);
    
    //   useEffect(() => {
    //     fetch(`https://bgg-json.azurewebsites.net/collection/${userName}`)
    //         .then((res) => {
    //             // console.log(res);
    //             return res.json();
    //         })
    //         .then((data) => setList(data));
    // }, [userName]);

    let newList = [];
    // newList = list.filter((value)=> value.owned === true && value.yearPublished > 2014);
    newList = list;

    return (
        <>
        <Header userName={userName}/>
        <DataBar gameList={list}/>
        <div className="container">
            <GameList userName={userName} gameList={newList}/>
        </div>
        </>
    )
}
