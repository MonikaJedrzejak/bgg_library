import React,{useState} from 'react';
import SearchBar from './SearchBar';
import FilterMinMax from './FilterMinMax';

export default function DataBar({gameList, searchQuery, setSearchQuery, setFilterState, resetFilter}) {
    const [visible, setVisible] = useState(false);
    const [rankMin, setRankMin] = useState('');
    const [rankMax, setRankMax] = useState('');
    // tutaj duzo min, max


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
    });
}

    return (
    <>
        <div className="dataBar">
            <div className="container dataBar_container">
                <div>Games in collection: {gameList.length}</div>
                <div className="icons_bar">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <button className="dataBar_btn" onClick={() => visible ? setVisible(false) : setVisible(true)}><i className="fas fa-filter"></i></button>
                </div>
            </div>
        </div>
    <div className="navbar_filter" style={visible ? visibleStyle : hiddenStyle}>
        <ul className="navBar_filter_list">
            <li className="filter_list_item">
                <div>
                    <h6>Owned</h6>
                    <div>
                        <button>Yes</button> <button>No</button>
                    </div>
                </div>
            </li>
            <li className="filter_list_item">
                <div>
                    <h6>Expansion</h6>
                    <button>Included</button> <button>Excluded</button> <button>Only</button>
                </div>
            </li>
            <li className="filter_list_item">
            <div>
                    <h6>Rank</h6>
                    <FilterMinMax filterMin={rankMin} filterMax={rankMax} setFilterMin={setRankMin} setFilterMax={setRankMax}/>
                </div>
            </li>
            <li className="filter_list_item">
            <div>
                    <h6>Players</h6>
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
                </div>
            </li>
            <li className="filter_list_item">
            <div>
                    <h6>Duration</h6>
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
                </div>
            </li>
            <li className="filter_list_item"><div>
                    <h6>Year published</h6>
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
                </div></li>
            <li className="filter_list_item">
            <div>
                    <h6>BGG Rating</h6>
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
                </div>
            </li>
            <li className="filter_list_item">
                <div>
                    <h6>User Rating</h6>
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
                    <button>Unrated</button>
                </div>
            </li>
        </ul>
        <button className="navBar_filter_button" onClick={filterChange}>Filter</button>
        <button className="navBar_filter_reset" onClick={resetFilter} >Reset filter</button>
    </div>
    </>
    )
}
