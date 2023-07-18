import { HomeFilled } from "@ant-design/icons";
import { Button, Form, Input, Menu, } from "antd";
import { useNavigate } from "react-router-dom";
import { Col, Row, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { signin } from "../../api/users";
import { Footer } from "antd/es/layout/layout";



interface ILogin {
  email: string;
  password: string;
}

const description = 'This is a description.';

const Login = () => {

  const navigate = useNavigate();
  const onSubmit = async (input: any) => {
    try {
      const { data } = await signin(input);
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('users', JSON.stringify(data.accessToken));
      navigate('/');
      message.success("Đăng nhập thành công!")
    } catch (error) {
      if (error = 400) {
        message.success("Vui lòng kiểm tra lại tài khoản");
      }
    }
  }
  return (
    <div className="appHeader">
      <Menu
        className="appMenu"

        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: <Link to="/">Home</Link>,
            key: "home",
          },
          {
            label: <Link to="/">About</Link>,
            key: "about",
          },
          {
            label: <Link to="/products">Product</Link>,
            key: "produtc",
          },
          {
            label: <Link to="/">Contact</Link>,
            key: "contact",
          },
          {
            label: <Link to="/admin">Sign</Link>,
            key: "sign",
          }
        ]}
      />


      <div style={{ margin: 'auto', maxWidth: '400px', marginTop: "50px" }}>
        <h1 style={{ textAlign: "center", }}>Login</h1>
        <Form name="normal_login" className="login-form" onFinish={onSubmit}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/admin/register">register now!</a>
          </Form.Item>
        </Form>
      </div>




      <div className="footer" style={{ backgroundColor: "dimgray", color: "#ffffff", height: "300px" }}>
        <Row>
          <Col span={6}>
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>ABOUT US</h2>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          </Col>
          <Col span={6}>
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>INFORMATION</h2>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>About us</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Delivery Information</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Terms & Condition</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Privacy & Policy</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Manufactures</p>
          </Col>
          <Col span={6}>
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>Categories</h2>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Iphone</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>SamSung</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>OPPO</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Xiaomi</p>
          </Col>
          <Col span={6}>
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>Contact</h2>
            <input type="email" />
            <button style={{ color: "red", fontWeight: "500" }}>Send</button>

          </Col>
        </Row>

      </div>
      <Footer style={{ textAlign: "center", background: "black", color: "white" }}>
        <div className="footer-layout">Ant Design ©2023 Created by Ant UED</div>
      </Footer>
    </div>
  );
}

export default Login;