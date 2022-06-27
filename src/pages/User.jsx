import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function User() {
    const user = useSelector(function(state){return state.user})
  return (
    <div>User
        {user.map(function(value, index){
            return (<h1 key={index}>{value.username}</h1>)
        })}
        <Outlet/>
    </div>
  )
}

export default User