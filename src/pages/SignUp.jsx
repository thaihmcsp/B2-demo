import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../redux/User/userAction'

function SignUp(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function signUpButton(){
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value
        const action = signUp(username, password);
        dispatch(action)
        // const email = document.querySelector('#email').value
        // const phone = document.querySelector('#phone').value
        if(username && password){
            // props.signUp(username, password)
            navigate('/signin')
        }else{
            alert('dien day du thong tin')
        }
    }
    return (
        <div>
            <h1>Trang dang ky</h1>
            <input type="text" name="" id="username" placeholder='username' />
            <input type="text" name="" id="password" placeholder='password' />
            {/* <input type="text" name="" id="phone" placeholder='phone' />
            <input type="text" name="" id="email" placeholder='email' /> */}
            <button onClick={signUpButton}>Dang ky</button>
            <p>{props.count}</p>
            <button onClick={props.increase}>click</button>
            
            <p>Da co tai khoan <Link to='/signin'><i>Dang nhap ngay</i></Link></p>
            <p>chua co tk <Link to='/'><i>home</i></Link></p>

        </div>
    )
}

export default SignUp