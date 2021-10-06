import React,{useState} from 'react';
import SearchBar from './SearchBar';
import FilterMinMax from './FilterMinMax';
import FilterTrueFalse from './FilterTrueFalse';

export default function DataBar({gameList, filteredList, searchQuery, setSearchQuery, setFilterState, resetFilter}) {
    const [visible, setVisible] = useState(false);
    const [rankMin, setRankMin] = useState(-1);
    const [rankMax, setRankMax] = useState(999999);
    const [playersMin, setPlayersMin] = useState(-1);
    const [playersMax, setPlayersMax] = useState(999);
    const [timeMin, setTimeMin] = useState(-1);
    const [timeMax, setTimeMax] = useState(9999);
    const [yearMin, setYearMin] = useState(-1);
    const [yearMax, setYearMax] = useState(9999);
    const [bggMin, setBggMin] = useState(-1);
    const [bggMax, setBggMax] = useState(10);
    const [userMin, setUserMin] = useState(-1);
    const [userMax, setUserMax] = useState(10);
    const [gameOwned, setGameOwned] = useState('Included');
    const [expansion, setExpansion] = useState('Included');



    const visibleStyle = {
        right: '0'
    };

    const hiddenStyle = {
        right: '-300px'
    };

const filterChange = () => {
    setFilterState({
        rankMin: rankMin,
        rankMax: rankMax,
        playersMin: playersMin,
        playersMax: playersMax,
        timeMin: timeMin,
        timeMax: timeMax,
        yearMin: yearMin,
        yearMax: yearMax,
        bggMin: bggMin,
        bggMax: bggMax,
        userMin: userMin,
        userMax: userMax,
        gameOwned: gameOwned,
        expansion: expansion,
    });
}

    return (
    <>
        <div className="dataBar">
            <div className="container dataBar_container">
                <div>Games in collection: {gameList.length}</div>
                <div>Filtered: {filteredList.length}</div>
                <div className="icons_bar">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <button className="dataBar_btn" onClick={() => visible ? setVisible(false) : setVisible(true)}><i className="fas fa-filter"></i></button>
                </div>
            </div>
        </div>
    <div className="navbar_filter" style={visible ? visibleStyle : hiddenStyle}>
        <ul className="navBar_filter_list">
            <li className="filter_list_item">
                <h6>Owned</h6>
                <FilterTrueFalse filterTF={gameOwned} setFilterTF={setGameOwned}/>
            </li>
            <li className="filter_list_item">
                <h6>Expansion</h6>
                <FilterTrueFalse filterTF={expansion} setFilterTF={setExpansion} />
            </li>
            <li className="filter_list_item">
                <h6>Rank</h6>
                <FilterMinMax filterMin={rankMin} filterMax={rankMax} setFilterMin={setRankMin} setFilterMax={setRankMax}/>
            </li>
            <li className="filter_list_item">
                <h6>Players</h6>
                <FilterMinMax filterMin={playersMin} filterMax={playersMax} setFilterMin={setPlayersMin} setFilterMax={setPlayersMax}/>
            </li>
            <li className="filter_list_item">
                <h6>Duration</h6>
                <FilterMinMax filterMin={timeMin} filterMax={timeMax} setFilterMin={setTimeMin} setFilterMax={setTimeMax}/>
            </li>
            <li className="filter_list_item">
                <h6>Year published</h6>
                <FilterMinMax filterMin={yearMin} filterMax={yearMax} setFilterMin={setYearMin} setFilterMax={setYearMax}/>
            </li>
            <li className="filter_list_item">
            <h6>BGG Rating</h6>
                <FilterMinMax filterMin={bggMin} filterMax={bggMax} setFilterMin={setBggMin} setFilterMax={setBggMax}/>
            </li>
            <li className="filter_list_item">
                <h6>User Rating</h6>
                <FilterMinMax filterMin={userMin} filterMax={userMax} setFilterMin={setUserMin} setFilterMax={setUserMax}/>
                {/* <button>Unrated</button> */}
            </li>
        </ul>
        <button className="navBar_filter_button" onClick={filterChange}>Filter</button>
        <button className="navBar_filter_reset" onClick={resetFilter} >Reset filter</button>
    </div>
    </>
    )
}
