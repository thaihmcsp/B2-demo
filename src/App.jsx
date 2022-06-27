import './App.css';
import { useState } from 'react';
import Body from './components/Body';
import Form from './components/Form';
import ListFriend from './components/ListFriend';
import { useEffect } from 'react';
import Modal from './components/Modal';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import User from './pages/User';
import UserId from './pages/UserId';
import 'antd/dist/antd.css';
import Menu from './pages/Menu';
import context from './context/context'
import ContextProvider from './context/ContextProvider';
import Test1 from './pages/Test/Test1';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from './redux-toolkit/productSlice';

console.log(context);

function App() {
    const dispatch = useDispatch()
    const data = useSelector( function(state){return state} )
    
    const [listUser, setListUser] = useState([])

    function signUp (username, password, phone, email){
        setListUser([...listUser, {username, password, phone, email}])
    }

    function addNewProduct () {
        const idSP = document.querySelector('#idSP').value;
        const ten = document.querySelector('#ten').value;
        const gia = document.querySelector('#gia').value;
        if(!idSP || !ten || !gia ){
            return window.alert('dien du thong tin')
        }

        const index = data.productList.findIndex((value)=> value.idSP === idSP)
        if(index !== -1){
            return window.alert('trung id')
        }        

        const action = addProduct({idSP, ten, gia})
        dispatch(action);
    }

    function removeProduct (idSP){
        const action = deleteProduct(idSP)
        dispatch(action);
    }
    
    function signIn (email, password){
        let index = listUser.findIndex(function(value){
            return value.email === email && value.password === password
        })
        return index != -1
    }

    return (
        <BrowserRouter>
            <ContextProvider test='abc'>
                {data.productList.map((value, index) => {
                    return(
                        <div>
                            {value.idSP} / {value.ten} / {value.gia} / 
                            <button onClick={()=>{ removeProduct(value.idSP) }}>delete</button>
                        </div>
                    )
                })}
                <input type="text" placeholder='idSP' id='idSP'/>
                <input type="text" placeholder='ten' id='ten'/>
                <input type="text" placeholder='gia' id='gia'/>
                <button onClick={addNewProduct}>click</button>
                <Routes>
                    <Route path='/test' element={<Test1/>}></Route>
                    <Route path='' element={<Index/>}></Route>
                    <Route path='/user' element={<User/>}>
                        <Route path='profile' element={<h1>profile</h1>}/>
                        <Route path='payment' element={<h1>payment</h1>}/>
                        <Route path='password' element={<h1>password</h1>}/>
                        <Route path=':usertestId' element={<UserId/>}/>
                    </Route>
                    <Route path='/menu' element={<Menu/>}></Route>
                    <Route path='/signup' element={<SignUp signUp={signUp}/>}></Route>
                    <Route path='/signin' element={<SignIn signIn={signIn}/>}></Route>
                    <Route path='/home' element={<ListFriend/>}></Route>
                    <Route path='*' element={<h1>error 404 not found</h1>}/>
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;