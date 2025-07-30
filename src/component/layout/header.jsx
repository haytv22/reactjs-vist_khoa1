import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import { useContext, useState } from "react";
import { BookOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { authContext } from "../context/auth.context";
export default function Header() {
  const { user } = useContext(authContext);
  console.log(user);

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "Home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/user"}>User</Link>,
      key: "User",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/bookPage"}>Book</Link>,
      key: "Book",
      icon: <BookOutlined />,
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
