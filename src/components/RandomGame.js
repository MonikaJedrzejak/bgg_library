import React from 'react'


export default function RandomGame({game}) {
    
    return (
        <div>
            <h2>{game.name}</h2>
            <span>{game.id}</span>
        </div>
    )
}
