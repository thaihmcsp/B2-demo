import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn(props) {
    const navigate = useNavigate()
    function login (){
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        if(!email || !password){
            alert('hay dien du thong tin')
        }else{
            let check = props.signIn(email, password)
            if(check){
                navigate('/')
            }else{
                alert('user khong ton tai')
            }
        }
    }
  return (
    <div>
        <h1>Trang dang nhap</h1>
        <input type="text" name="" id="email" placeholder='email' />
        <input type="text" name="" id="password" placeholder='password' />
        <button onClick={login}>Dang nhap</button>

    
        <p>chua co tk <Link to='/signup'><i>dang ky ngay</i></Link></p>
        <p>chua co tk <Link to='/'><i>home</i></Link></p>
        <p>chua co tk <Link to='/user'><i>user</i></Link></p>

    </div>
  )
}

export default SignIn