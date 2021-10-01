import React from 'react'

export default function Game({gameObject}) {

    const gameInfo = {
        gameId: gameObject.gameId,
        name: gameObject.name,
        image: gameObject.image,
        thumbnail: gameObject.thumbnail,
        minPlayers: gameObject.minPlayers,
        maxPlayers: gameObject.maxPlayers,
        playingTime: gameObject.playingTime,
        isExpansion: gameObject.isExpansion,
        yearPublished: gameObject.yearPublished,
        bggRating: gameObject.bggRating,
        averageRating: gameObject.averageRating,
        rank: gameObject.rank,
        numPlays: gameObject.numPlays,
        rating: gameObject.rating,
        owned: gameObject.owned ,
        preOrdered: gameObject.preOrdered,
        forTrade: gameObject.forTrade,
        previousOwned: gameObject.previousOwned,
        want: gameObject.want,
        wantToPlay: gameObject.wantToPlay,
        wantToBuy: gameObject.wantToBuy,
        wishList: gameObject.wishList,
        userComment: gameObject.userComment,
    };


    // kod ponizej generuje bledy
    // useEffect(() => {
    //     fetch(`http://bgg-json.azurewebsites.net/thing/${gameInfo.gameId}`)
    //         .then((res) => {
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then((data) => setGameInfo((prev) => {
    //             return ({
    //               ...prev,
    //               designers: data.designers,
    //               mechanics: data.mechanics,
    //               description: data.description,
    //               artists: data.artists,
    //             });
    //         }))
    // }, []);

    function changeColor(grade) {
        const colorTab = ["#e9e7e7","#b2151f","#b2151f","#d71925","#d71925","#5369a2","#5369a2","#1d8acd","#2fc482", "#249563","#249563"];
        let num = 0;
        let color = "";
        if (grade > 0) {
            num = grade.toFixed(0);
        }
        if (grade < 0) {
            color = colorTab[0];
        }
        color = colorTab[num];
        
    return color;
//background: linear-gradient(90deg, rgba(178,21,31,1) 0%, rgba(215,25,37,1) 20%, rgba(83,105,162,1) 40%, rgba(29,138,205,1) 60%, rgba(47,196,130,1) 80%, rgba(36,149,99,1) 90%);
    }

    return (
        <>
            <td className="gameRank">{gameInfo.rank > 0 ? gameInfo.rank : "-" }</td>
            <td><img src={gameInfo.thumbnail} alt={gameInfo.name} className="gamePhoto"/></td>
            <td><div className="gameName">
                <a href={`https://boardgamegeek.com/boardgame/${gameInfo.gameId}`} target="_blank" rel="noreferrer">{gameInfo.name}</a>
                <div className="gameComment">{gameInfo.isExpansion ? <p className="gameExpansion">Expansion</p> : null}</div></div></td>
            <td className="gameInfo">{gameInfo.minPlayers} - {gameInfo.maxPlayers}</td>
            <td className="gameInfo">{gameInfo.playingTime}</td>
            <td className="gameInfo">{gameInfo.yearPublished}</td>
            <td><div className="gameRating" style={{backgroundColor: changeColor(gameInfo.averageRating)}}>{gameInfo.averageRating.toFixed(2)}</div></td>
            <td><div className="gameRating" style={{backgroundColor: changeColor(gameInfo.rating)}}>{gameInfo.rating > 0 ? gameInfo.rating.toFixed(2): "-"}</div></td>
            <td className="gameRank">{gameInfo.owned ? "Yes" : "No"}</td>
            {/* <div>{gameInfo.mechanics}</div> */}
        </>
    )
}
