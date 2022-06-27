import React, {useEffect} from 'react'

function Body(props) {

    useEffect(() => {
        console.log(6, 100);
    },)

    return (
        <div>
            <h1>{props.count}</h1>
            <h1>{props.user}</h1>
        </div>
    )
}

export default Body