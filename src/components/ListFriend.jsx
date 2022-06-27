import React from 'react'

function ListFriend(props) {

    return (
        <div>
            <h1>Total: {props.money.toLocaleString()}</h1>
            {props.listFriend.map( (friend, index) => {
                return (
                    <div key={index} className='friend'>
                        <img src={friend.avatar} alt="" />
                        <p>{friend.name} /</p>
                        <p>{friend.money}</p>
                        <button onClick={ ()=> {props.deleteFriend(index)}}>delete</button>
                        <button onClick={()=>{props.showModal(index)}}>update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListFriend