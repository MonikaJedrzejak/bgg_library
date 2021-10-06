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
        rankMin: -10,
        rankMax: 999999,
        playersMin: -1,
        playersMax: 999,
        timeMin: -1,
        timeMax: 9999,
        yearMin: -1,
        yearMax: 9999,
        bggMin: -1,
        bggMax: 10,
        userMin: -1,
        userMax: 10,
        gameOwned: 'Included',
        expansion: 'Included',
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
        newList = newList.filter((el) => (
            el.rank >= filterState.rankMin && el.rank <= filterState.rankMax &&
            el.minPlayers >= filterState.playersMin && el.maxPlayers <= filterState.playersMax &&
            el.playingTime >= filterState.timeMin && el.playingTime <= filterState.timeMax &&
            el.yearPublished >= filterState.yearMin && el.yearPublished <= filterState.yearMax &&
            el.averageRating >= filterState.bggMin && el.averageRating <= filterState.bggMax &&
            el.rating >= filterState.userMin && el.rating <= filterState.userMax
            ));
        if(filterState.gameOwned === 'Only') {
            newList = newList.filter((el)=> el.owned === true);
        } else if(filterState.gameOwned === 'Excluded') {
            newList = newList.filter((el)=> el.owned === false);
        }
        if(filterState.expansion === 'Only') {
            newList = newList.filter((el)=> el.isExpansion === true);
        } else if(filterState.expansion === 'Excluded') {
            newList = newList.filter((el)=> el.isExpansion === false);
        }

        const resetFilter = () => {
            // newList = [...list];
            setFilterState({
                rankMin: -10,
            rankMax: 999999,
            playersMin: -1,
            playersMax: 999,
            timeMin: -1,
            timeMax: 9999,
            yearMin: -1,
            yearMax: 9999,
            bggMin: -1,
            bggMax: 10,
            userMin: -1,
            userMax: 10,
            gameOwned: 'Included',
            expansion: 'Included',
            });
        }

    return (
        <>
        <div className="sticky_wrapper">
            <Header userName={userName}/>
            <DataBar gameList={list} filteredList={newList} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setFilterState={setFilterState} resetFilter={resetFilter} />
        </div>
        <div className="container">
            <GameList userName={userName} gameList={newList}/>
        </div>
        </>
    )
}
