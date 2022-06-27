import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import context from '../../context/context'

function Test3() {
    const state = useSelector(function(state){
        return state.user
    })

    console.log(11, state);

    const data = useContext(context)
    console.log(7, data);
    return (
        <div>Test3</div>
    )
}

export default Test3