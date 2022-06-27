import React from 'react'

function Modal(props) {
    console.log(4, props);
    function updateData (){
        const name = document.querySelector('#nameModal').value
        const avatar = document.querySelector('#avatarModal').value
        const money = document.querySelector('#moneyModal').value * 1
        props.updateFriend(name, avatar, money)
    }

  return (
    <div className={props.isShowModal ? 'show' : "hide"} style={{background: 'red'}}>
        <input type="text" name="" id="nameModal" placeholder='name' />
        <input type="text" name="" id="avatarModal" placeholder='avatar' />
        <input type="text" name="" id="moneyModal" placeholder='money' />
        <button onClick={updateData}>ok</button>
    </div>
  )
}

export default Modal