import { Input, Button } from 'antd';
import { useState } from 'react';
export default function UserForm() {
    const [fullName, setFuName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handelClickButton = () => {
        console.log({ fullName, email, password, phoneNumber });

    }
    return <>
        <div className="userForm" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="userForm-name">
                <span>User name</span>
                <Input placeholder="Basic usage"
                    value={fullName}
                    onChange={(e) => { setFuName(e.target.value) }}
                />
            </div>
            <div className="userForm-email">
                <span>Email</span>
                <Input placeholder="Basic usage"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>
            <div className="userForm-password">
                <span>Password</span>
                <Input.Password placeholder="Basic usage"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>
            <div className="userForm-PhonNumber">
                <span>Phone number</span>
                <Input placeholder="Basic usage"
                    value={phoneNumber}
                    onChange={(e) => { setPhoneNumber(e.target.value) }}
                />
            </div>
            <div>
                <Button onClick={handelClickButton} type="primary">Primary Button</Button>
            </div>
        </div>
    </>
}