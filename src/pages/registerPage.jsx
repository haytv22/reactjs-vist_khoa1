import {
  Input,
  Button,
  Grid,
  Form,
  message,
  notification,
  Row,
  Col,
  Divider,
} from "antd";
import { registerUserAPI } from "../services/api_Services";
import { json, Link, useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    console.log(res.data);

    if (res.data) {
      notification.success({
        message: "Đăng ký thành công",
        description: "success",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Thất bại",
        description: res.message,
      });
    }
  };
  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        style={{
          margin: "10px",
        }}
      >
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <h3>Đăng ký</h3>
            <Form.Item
              label="Full name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Form.Item
              label="Phonr number"
              name="phone"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/\d+/g),
                  message: "Wrong format!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col xs={24} md={8}>
            <Button
              style={{ width: "84px" }}
              type="primary"
              onClick={() => form.submit()}
            >
              register
            </Button>
            <Divider></Divider>
            <div>
              đã có tài khoản? <Link to="login">Đăng nhập tại đay</Link>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
