import { Input, Button, notification, message, Flex, Modal } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { CreateUser } from '../../services/api_Services';
import { json } from 'react-router-dom';
export default function UserForm({ loandUser }) {
    const [fullName, setFuName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = async () => {
        const res = await CreateUser(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create Use',
                description: 'tạo use thành công'
            })
            setIsModalOpen(false);
            setFuName('')
            setEmail('')
            setPassword('')
            setPhone('')
            await loandUser()
        } else {
            notification.error({
                message: 'Error creat Use',
                description: JSON.stringify(res.message)
            })
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handelClickButton = () => {
        setIsModalOpen(true);

    }

    return <>

        <div style={{ display: 'Flex', justifyContent: 'space-between', padding: '10px' }}>
            <h3>Table-User</h3>
            <Button onClick={handelClickButton} type="primary">thêm user</Button>
        </div>



        <Modal
            title="Tạo người dùng"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            okText={'Create'}
            onCancel={handleCancel}
            maskClosable={false}
        >
            <div className="userForm" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: '10px' }}>
                <div className="userForm-name">
                    <span>User name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => { setFuName(e.target.value) }}
                    />
                </div>
                <div className="userForm-email">
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="userForm-password">
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="userForm-PhonNumber">
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                </div>
            </div>
        </Modal>

    </>
}