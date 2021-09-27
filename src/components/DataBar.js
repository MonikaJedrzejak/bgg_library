import React from 'react'

export default function DataBar({gameList}) {
    return (
        <div className="dataBar">
            <span>Games in collection: {gameList.length}</span>
        </div>
    )
}
