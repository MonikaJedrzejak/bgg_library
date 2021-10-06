import React from 'react'

export default function FilterTrueFalse({filterTF, setFilterTF}) {
    const stylePushed = {
        backgroundColor: '#020f59'
    }
    const styleUnpushed = {
        backgroundColor: '#024873'
    }

    return (
        <div>
            <button className="filter_buttons" onClick={()=>setFilterTF('Included')} style={filterTF === 'Included' ? stylePushed : styleUnpushed}>Included</button>
            <button className="filter_buttons" onClick={()=>setFilterTF('Excluded')} style={filterTF === 'Excluded' ? stylePushed : styleUnpushed}>Excluded</button>
            <button className="filter_buttons" onClick={()=>setFilterTF('Only')} style={filterTF === 'Only' ? stylePushed : styleUnpushed}>Only</button>
        </div>
    )
}
