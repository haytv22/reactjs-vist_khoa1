import { Space, Table, Tag } from 'antd';
import { FetchAllUserAPI } from '../../services/api_Services';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdataUserModal from './updataUser.modal';
export default function UserTable({ dataUser }) {
    const [isModalUpdataOpen, setisModalUpdataOpen] = useState(false);
    const [dataUpdata, setDataUpdata] = useState(null)
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record._id}</a>
                </Space>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" style={{ display: 'flex', gap: '20px' }}>
                    <EditOutlined onClick={() => {
                        setDataUpdata(record)
                        setisModalUpdataOpen(true)

                    }} style={{ fontSize: '20px', cursor: 'pointer', color: '#1677ff' }} />
                    <DeleteOutlined style={{ fontSize: '20px', cursor: 'pointer', color: 'red' }} />
                </Space>
            ),
        },
    ]


    return (
        <div>
            <Table columns={columns} dataSource={dataUser} rowKey={'_id'} />
            <UpdataUserModal
                isModalUpdataOpen={isModalUpdataOpen}
                setisModalUpdataOpen={setisModalUpdataOpen}

                dataUpdata={dataUpdata}
                setDataUpdata={setDataUpdata}
            />
        </div>
    )
}