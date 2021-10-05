import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Header from './Header.js';
import GameList from './GameList.js';
import DataBar from './DataBar';
import {getCollection} from '../api/operations';

export default function Collection() {
    let { userName } = useParams();
    const [list, setList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


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

    const filterList = (list, query) => {
            if (!query) {
                return list;
            }
            return list.filter((el) => {
                const itemName = el.name.toLowerCase();
                return itemName.includes(query);
            });
        };
        newList = filterList(list, searchQuery);


    return (
        <>
        <Header userName={userName}/>
        <DataBar gameList={list} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <div className="container">
            <GameList userName={userName} gameList={newList}/>
        </div>
        </>
    )
}
