import { Button, Col, Divider, Flex, Form, Input, message, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../services/api_Services";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (value) => {
    setLoading(true);
    const res = await LoginAPI(value.email, value.password);
    console.log(res);

    if (res.data) {
      setLoading(false);
      message.success("đăng nhập thành công");
      navigate("/");
    } else {
      setLoading(false);
      message.error(JSON.stringify(res.error));
    }
  };
  return (
    <Row justify={"center"} style={{ margin: "20px" }}>
      <Col xs={24} md={16} lg={10}>
        <fieldset
          style={{ padding: "10px", borderRadius: "10px", margin: "10px" }}
        >
          <legend>Đăng nhập</legend>
          <Form name="basic" onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
              <div style={{ display: "Flex", justifyContent: "space-between" }}>
                <Button loading={loading} type="primary" htmlType="submit">
                  Login
                </Button>
                <div>
                  <Link to="/">Go to hom page</Link>
                </div>
              </div>
            </Form.Item>
            <Divider></Divider>
            <div>
              Chưa có tài khoản? <Link to="register">Đăng ký</Link>
            </div>
          </Form>
        </fieldset>
      </Col>
    </Row>
  );
}
