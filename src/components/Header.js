import React from 'react'

export default function Header({userProps}) {
    return (
        <header className="header">
            <div className="container header_container">
                <span>Hello {userProps}</span>
            </div>
        </header>
    )
}
