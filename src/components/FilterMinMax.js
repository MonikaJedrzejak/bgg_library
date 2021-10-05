import React from 'react'

export default function FilterMinMax({filterMin, setFilterMin, filterMax, setFilterMax}) {
    return (
        <div>
            <input
            value={filterMin}
            onInput={emin => setFilterMin(emin.target.value)}
            className="filter_input"
            type="text"
            placeholder="MIN">
            </input>
             - 
            <input
            value={filterMax}
            onInput={emax => setFilterMax(emax.target.value)}
            className="filter_input"
            type="text"
            placeholder="MAX">
            </input>
        </div>
    )
}
