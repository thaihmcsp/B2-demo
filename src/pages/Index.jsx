import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'antd';

function Index() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        const name = document.querySelector('#name').value
        const pass = document.querySelector('#pass').value
        console.log(name, pass);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(function(){

    },[])

    return (
        <div>
            <h1>welcome</h1>
            <Link to='/signup'><button>dang ky</button></Link>
            <Link to='/signin'><button>dang nhap</button></Link>
            <p>chua co tk <Link to='/user'><i>user</i></Link></p>
            <>
                <Button type="primary" onClick={showModal}> Open Modal </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <input type="text" placeholder='name' id='name'/>
                    <input type="text" placeholder='pass' id='pass'/>
                </Modal>
            </>
        </div>
    )
}

export default Index