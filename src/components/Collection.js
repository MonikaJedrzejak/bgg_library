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
    const [filterState, setFilterState] = useState({
        rankMin: 0,
        rankMax: 99999999999999,
    });



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

    let newList = [...list];

        const filterList = (list, query) => {
            if (!query) {
                return list;
            }
            return list.filter((el) => {
                const itemName = el.name.toLowerCase();
                return itemName.includes(query);
            });
        };
        newList = filterList(newList, searchQuery);
        newList = newList.filter((el) => el.rank >= filterState.rankMin && el.rank <= filterState.rankMax);

        const resetFilter = () => {
            newList = [...list];
        } // nie dziala

    return (
        <>
        <div className="sticky_wrapper">
            <Header userName={userName}/>
            <DataBar gameList={list} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilterState={setFilterState} resetFilter={resetFilter} />
        </div>
        <div className="container">
            <GameList userName={userName} gameList={newList}/>
        </div>
        </>
    )
}
