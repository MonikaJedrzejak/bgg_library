import React, {useState} from 'react';
import Game from './Game.js';

export default function GameList({gameList}) {
  const [currentSort, setCurrentSort] = useState('sort');
  const [sortCategory, setSortCategory] = useState('rank');
  const [sortButton, setSortButton] = useState({
    rank: 'sort',
    bgg: 'sort',
    user: 'sort',
    time: 'sort',
    year: 'sort',
    players: 'sort',
    name: 'sort',
  });
  let newGameList = [...gameList];
  const onSortChange = (category) => {
		let nextSort;

		if (currentSort === 'sort-down') nextSort = 'sort-up';
		else if (currentSort === 'sort-up') nextSort = 'sort';
		else if (currentSort === 'sort') nextSort = 'sort-down';

        setCurrentSort(nextSort);
        setSortCategory(category);

        if (category === 'rank') {
          setSortButton({
            rank: nextSort,
            bgg: 'sort',
            user: 'sort',
            time: 'sort',
            year: 'sort',
            players: 'sort',
            name: 'sort',
          });
        }
        else if (category === 'bgg') {
          setSortButton({
            rank: 'sort',
            bgg: nextSort,
            user: 'sort',
            time: 'sort',
            year: 'sort',
            players: 'sort',
            name: 'sort',
          });
        }
          else if (category === 'user') {
            setSortButton({
              rank: 'sort',
              bgg: 'sort',
              user: nextSort,
              time: 'sort',
              year: 'sort',
              players: 'sort',
              name: 'sort',
            });
        }
        else if (category === 'time') {
          setSortButton({
            rank: 'sort',
            bgg: 'sort',
            user: 'sort',
            time: nextSort,
            year: 'sort',
            players: 'sort',
            name: 'sort',
          });
      }
      else if (category === 'year') {
        setSortButton({
          rank: 'sort',
          bgg: 'sort',
          user: 'sort',
          time: 'sort',
          year: nextSort,
          players: 'sort',
          name: 'sort',
        });
    }
    else if (category === 'players') {
      setSortButton({
        rank: 'sort',
        bgg: 'sort',
        user: 'sort',
        time: 'sort',
        year: 'sort',
        players: nextSort,
        name: 'sort',
      });
    }
      else if (category === 'name') {
        setSortButton({
          rank: 'sort',
          bgg: 'sort',
          user: 'sort',
          time: 'sort',
          year: 'sort',
          players: 'sort',
          name: nextSort,
        })
  }
	};
  const sortList = (sortType, category) => {
    if (category === 'rank') {
      if (sortType === 'sort-down') return (a, b) => b.rank - a.rank;
      else if (sortType === 'sort-up') return (a, b) => a.rank - b.rank;
      else if (sortType === 'sort') return (a, b) => a;
    }
    else if (category === 'bgg') {
      if (sortType === 'sort-down') return (a, b) => b.averageRating - a.averageRating;
      else if (sortType === 'sort-up') return (a, b) => a.averageRating - b.averageRating;
      else if (sortType === 'sort') return (a, b) => a;
    }
    else if (category === 'user') {
      if (sortType === 'sort-down') return (a, b) => b.rating - a.rating;
      else if (sortType === 'sort-up') return (a, b) => a.rating - b.rating;
      else if (sortType === 'sort') return (a, b) => a;
    }
    else if (category === 'time') {
      if (sortType === 'sort-down') return (a, b) => b.playingTime - a.playingTime;
      else if (sortType === 'sort-up') return (a, b) => a.playingTime - b.playingTime;
      else if (sortType === 'sort') return (a, b) => a;
    }
    else if (category === 'year') {
      if (sortType === 'sort-down') return (a, b) => b.yearPublished - a.yearPublished;
      else if (sortType === 'sort-up') return (a, b) => a.yearPublished - b.yearPublished;
      else if (sortType === 'sort') return (a, b) => a;
    }
    else if (category === 'players') {
      if (sortType === 'sort-down') return (a, b) => b.minPlayers - a.minPlayers;
      else if (sortType === 'sort-up') return (a, b) => a.minPlayers - b.minPlayers;
      else if (sortType === 'sort') return (a, b) => a;
    }
    }


return (
<table>
  <thead>
    <tr className="gameList_header">
      <th>
        <button className="sortButton" onClick={() => onSortChange('rank')}>
					Rank <i className={`fas fa-${sortButton.rank}`} />
				</button>
      </th>
      <th> </th>
      <th>
      {/* <button className="sortButton" onClick={() => onSortChange('name')}> */}
        Title
        {/* <i className={`fas fa-${sortButton.name}`} /> */}
        {/* </button> */}
      </th>
      <th>
      <button className="sortButton" onClick={() => onSortChange('players')}>
        <i className="fas fa-user-friends"></i><i className={`fas fa-${sortButton.players}`} />
        </button>
      </th>
      <th>
      <button className="sortButton" onClick={() => onSortChange('time')}>
        <i className="fas fa-clock"></i> <i className={`fas fa-${sortButton.time}`} />
			</button>
      </th>
      <th>
      <button className="sortButton" onClick={() => onSortChange('year')}>
        <i className="far fa-calendar-alt"></i> <i className={`fas fa-${sortButton.year}`} />
      </button>
      </th>
      <th>
        <button className="sortButton" onClick={() => onSortChange('bgg')}>
        BGG <i className={`fas fa-${sortButton.bgg}`} />
				</button>
        </th>
      <th>
        <button className="sortButton" onClick={() => onSortChange('user')}>
          User <i className={`fas fa-${sortButton.user}`} />
				</button>
      </th>
      <th>Own</th>
      {/* <i class="fas fa-house-user"></i> */}
    </tr>
  </thead>
  <tbody>
    {newGameList.length ? (
  newGameList.sort(sortList(currentSort,sortCategory)).map((el,idx) => {
    return <tr className="gameList_row" key={idx}><Game gameObject={el}/></tr> })) : (<p>Loading...</p>)
  }
  </tbody>
</table>
);
}
