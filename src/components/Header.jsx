import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>{props.testData.username}</h1>
        </div>
    )
}

export default Header