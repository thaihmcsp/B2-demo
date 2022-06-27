import React from 'react'

function Form(props) {
    console.log(4, props);
    function addNewFriend () {
        const name = document.querySelector('#name').value
        const avatar = document.querySelector('#avatar').value
        const money = document.querySelector('#money').value * 1
        console.log(typeof money);
        props.addFriend(name, avatar, money)
    }

    return (
        <div>
            <input type="text" name="" id="name" placeholder='name'/>
            <input type="text" id='avatar' placeholder='avatar'/>
            <input type="text" id='money' placeholder='money'/>
            <button onClick={addNewFriend}>add</button>
        </div>
    )
}

export default Form