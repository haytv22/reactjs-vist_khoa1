import { useEffect, useState } from "react"
import { UpdataUser } from "../../services/api_Services"
import { Input, Modal, notification } from "antd"

const UpdataUserModal = ({ isModalUpdataOpen, setisModalUpdataOpen, dataUpdata, setDataUpdata, loandUser }) => {
    const [fullName, setFuName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        if (dataUpdata) {
            setId(dataUpdata._id)
            setFuName(dataUpdata.fullName)
            setPhone(dataUpdata.phone)
        }
    }, [dataUpdata])

    const handleOk = async () => {
        const res = await UpdataUser(id, fullName, phone);
        if (res.data) {
            await loandUser()
            notification.success({
                message: 'Edit Use',
                description: 'Edit use thành công'
            })
            setisModalUpdataOpen(false);

        } else {
            notification.error({
                message: 'Error Edit Use',
                description: JSON.stringify(res.message)
            })
        }
    };
    const handleCancel = () => {
        setisModalUpdataOpen(false);
    };

    return (
        <Modal
            title="Sửa người dùng"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdataOpen}
            onOk={handleOk}
            okText={'Save'}
            onCancel={handleCancel}
            maskClosable={false}
        >
            <div className="userForm" style={{ display: "flex", flexDirection: "column", gap: "10px", padding: '10px' }}>
                <div className="userForm-id">
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled={true}
                        onChange={(e) => { setId(e.target.value) }}
                    />
                </div>
                <div className="userForm-name">
                    <span>User name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => { setFuName(e.target.value) }}
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
    )
}
export default UpdataUserModal