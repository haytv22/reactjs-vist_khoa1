import { Drawer, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useState } from 'react';
import { handelUploadFile, UpdataUserAvatar } from '../../services/api_Services';
const UserDetails = ({ setOpen, open, dataDetails, loandUser }) => {
    const [fileSelect, setFileSelect] = useState(null)
    const [preview, setPreview] = useState(null)
    const onClose = () => {
        setOpen(false);
    };
    if (!dataDetails) return null


    const props = {
        name: 'file',
        // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
        beforeUpload: () => false,
        onChange(info) {
            if (info.fileList.length === 0) {
                message.error(`không có ảnh nào được tải lên`);
                setFileSelect(null);
                setPreview(null);
            } else if (info.fileList.length > 0) {
                message.success(`${info.file.name} file uploaded successfully`);
                setFileSelect(info.file);
                setPreview(URL.createObjectURL(info.file)); // dùng trực tiếp fileObj
            }
        },
    };

    const handelUpdataUserAvatar = async () => {
        const resUpload = await handelUploadFile(fileSelect, 'avatar')
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded
            const resUpdataAvatar = await UpdataUserAvatar(newAvatar, dataDetails._id, dataDetails.fullName, dataDetails.phone)
            if (resUpdataAvatar.data) {
                setFileSelect(null);
                setPreview(null);
                setOpen(false);
                await loandUser()
                notification.success({
                    message: 'User Updata Avatar',
                    description: 'cập nhật Avatar thành công'
                })
            } else {
                notification.error({
                    message: 'Error upload file',
                    description: JSON.stringify(resUpdataAvatar.message)
                })
            }
        } else {
            notification.error({
                message: 'Error upload file',
                description: JSON.stringify(resUpload.message)

            })
        }
    }
    return (
        <>
            <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
            >
                <p>{`ID : ${dataDetails._id}`}</p>
                <p>{`Full Name : ${dataDetails.fullname}`}</p>
                <p>{`Email : ${dataDetails.email}`}</p>
                <p>{`Phone : ${dataDetails.phone}`}</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label htmlFor="">Avatar</label>
                    <img style={{
                        width: '200px', height: '200px',
                        border: '1px solid black', borderRadius: '10%',
                        marginLeft: '0px',
                        objectFit: 'cover'
                    }}
                        src={`${import.meta.env.VITE_URL_BACKEND}${'images/avatar/'}${dataDetails.avatar}`} alt="" />
                </div>

                <Upload {...props} accept="image/*">
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                {preview &&
                    <>
                        <img style={{
                            width: '200px', height: '200px',
                            border: '1px solid black', borderRadius: '10%',
                            marginLeft: '0px',
                            objectFit: 'cover'
                        }}
                            src={preview} alt="" /><br />
                        <Button type='primary'
                            onClick={handelUpdataUserAvatar}

                        >Save</Button>
                    </>

                }

            </Drawer >
        </>
    )
}
export default UserDetails