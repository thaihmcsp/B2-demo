import React from 'react'
import { useContext } from 'react'
import context from '../context/context'

function Child() {
    const data = useContext(context)
    return (
        <div>Child {data}</div>
    )
}

export default Child