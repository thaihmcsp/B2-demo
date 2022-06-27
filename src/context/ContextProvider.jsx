import context from "./context";
import React from 'react'

function ContextProvider(props) {
    const Provider = context.Provider
    return (
        <Provider value={props.test}>
            {props.children}
        </Provider>
    )
}

export default ContextProvider