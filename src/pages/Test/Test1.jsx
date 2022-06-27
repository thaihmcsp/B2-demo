import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import context from '../../context/context'
import ContextProvider from '../../context/ContextProvider'

import Test2 from './Test2'


function Test1() {
    const [data, setData] = useState([])
    const dataApp = useContext(context)
    console.log(dataApp);

    useEffect(function(){
        fetch('https://60b4bc9c4ecdc1001748150c.mockapi.io/sanPham')
        .then(function(response){ return response.json()})
        .then(function(response){ setData(response);})
        .catch(function(err){ console.log(err);})
    }, [])

    return (
        <ContextProvider test={{data, dataApp}}>
            <div>Test1
                <Test2/>
            </div>
        </ContextProvider>
    )
}

export default Test1