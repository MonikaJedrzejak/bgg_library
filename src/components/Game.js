import React, {useState,useEffect} from 'react'

export default function Game({gameObject}) {
    // const [gameId, name, image, thumbnail, minPlayers, maxPlayers,playingTime, isExpansion, yearPublished, bggRating, averageRating, rank, numPlays, rating, owned, preOrdered, forTrade, previousOwned, want, wantToPlay, wantToBuy, wishList, userComment] = {gameObject}
    const [gameInfo, setGameInfo] = useState({
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
    })

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

    return (
        <div className="gameRow">
            <p className="gameRank">{gameInfo.rank}</p>
            <img src={gameInfo.thumbnail} alt={gameInfo.name} className="gamePhoto"/>
            <div className="gameName">
                <p>{gameInfo.name}</p>
                <p className="gameComment">{gameInfo.userComment}</p></div>
            <div className="gameRating">{gameInfo.averageRating.toFixed(2)}</div>
            <div className="gameRating">{gameInfo.rating.toFixed(2)}</div>
            {/* <div>{gameInfo.mechanics}</div> */}
            {/* <p>owned: {gameInfo.owned}</p> */}
        </div>
    )
}
