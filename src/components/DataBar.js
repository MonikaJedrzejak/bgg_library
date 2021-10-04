import React,{useState} from 'react';
import SearchBar from './SearchBar';

export default function DataBar({gameList, searchQuery, setSearchQuery}) {
    const [visible, setVisible] = useState(false);

    const visibleStyle = {
        right: '0'
    };

    const hiddenStyle = {
        right: '-300px'
    };

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
                    <div>
                    <input className="filter_input" type="text"></input> - <input className="filter_input" type="text"></input>
                    </div>
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
        <button className="navBar_filter_reset">Reset filter</button>
    </div>
    </>
    )
}
