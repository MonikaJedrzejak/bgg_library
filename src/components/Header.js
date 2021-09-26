import React from 'react'

export default function Header({userName}) {
    return (
        <header className="header">
            <div className="container header_container">
                <span>Hello {userName}</span>
            </div>
        </header>
    )
}
