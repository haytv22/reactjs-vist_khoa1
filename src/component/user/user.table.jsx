import { Space, Table, Popconfirm, notification } from "antd";
import { DeleteUser } from "../../services/api_Services";
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdataUserModal from "./updataUser.modal";
import UserDetails from "./user.details";

export default function UserTable({
  dataUser,
  loandUser,
  current,
  pageSize,
  total,
  setPageSize,
  setCurent,
}) {
  const [isModalUpdataOpen, setisModalUpdataOpen] = useState(false);
  const [dataUpdata, setDataUpdata] = useState(null);
  const [dataDetails, setDataDetails] = useState(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const res = await DeleteUser(id);
    if (res.data) {
      await loandUser();
      notification.success({
        message: "Delete User",
        description: "Delete User thành công",
      });
    } else {
      notification.error({
        message: "Error Edit Use",
        description: JSON.stringify(res.message),
      });
    }
  };

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return index + 1 + (current - 1) * pageSize;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              showDrawer();
              setDataDetails(record);
            }}
          >
            Invite {record._id}
          </a>
        </Space>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdata(record);
              setisModalUpdataOpen(true);
            }}
            style={{ fontSize: "20px", cursor: "pointer", color: "#1677ff" }}
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => {
              handleDelete(record._id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              style={{ fontSize: "20px", cursor: "pointer", color: "red" }}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (pagination.current !== current) {
        setCurent(pagination.current);
      }
    }
    if (pagination && pagination.pageSize) {
      if (pagination.pageSize !== pageSize) {
        setPageSize(pagination.pageSize);
      }
    }
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataUser}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <UpdataUserModal
        isModalUpdataOpen={isModalUpdataOpen}
        setisModalUpdataOpen={setisModalUpdataOpen}
        dataUpdata={dataUpdata}
        setDataUpdata={setDataUpdata}
        loandUser={loandUser}
      />
      <UserDetails
        open={open}
        setOpen={setOpen}
        dataDetails={dataDetails}
        loandUser={loandUser}
      />
    </div>
  );
}
