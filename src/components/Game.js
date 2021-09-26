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
        owned: gameObject.owned ? "true":"false",
        preOrdered: gameObject.preOrdered ? "true":"false",
        forTrade: gameObject.forTrade ? "true":"false",
        previousOwned: gameObject.previousOwned ? "true":"false",
        want: gameObject.want ? "true":"false",
        wantToPlay: gameObject.wantToPlay ? "true":"false",
        wantToBuy: gameObject.wantToBuy ? "true":"false",
        wishList: gameObject.wishList ? "true":"false",
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
        const colorTab = ["gray","#b2151f","#b2151f","#d71925","#d71925","#5369a2","#5369a2","#1d8acd","#2fc482", "#249563","#249563"];
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
        <div className="gameRow">
            <p className="gameRank">{gameInfo.rank}</p>
            <img src={gameInfo.thumbnail} alt={gameInfo.name} className="gamePhoto"/>
            <div className="gameName">
                <p>{gameInfo.name}</p>
                <p className="gameComment">{gameInfo.userComment}</p></div>
            <div className="gameRating" style={{backgroundColor: changeColor(gameInfo.averageRating)}}>{gameInfo.averageRating.toFixed(2)}</div>
            <div className="gameRating" style={{backgroundColor: changeColor(gameInfo.rating)}}>{gameInfo.rating.toFixed(2)}</div>
            {/* <div>{gameInfo.mechanics}</div> */}
            {/* <p>owned: {gameInfo.owned}</p> */}
        </div>
    )
}
