import { HomeFilled } from "@ant-design/icons";
import {
  Button, Form, Input,
  Menu, message
} from "antd";
import { Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const description = 'This is a description.';
const items = [
  {
    title: 'Finished',
    description,
  },
  {
    title: 'In Progress',
    description,
  },
  {
    title: 'Waiting',
    description,
  },
];
const { Meta } = Card;
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
const RegisterForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:8080/api/signup', values);
      navigate("/admin")
      message.success('Đăng ký thành công!');
    } catch (error) {
      console.error(error);
      message.error('Đăng ký thất bại!');
    }
  };

  function handleClick(e) {
    console.log('click', e);
  }
  return (
    <div className="appHeader">
      <Menu
        className="appMenu"
        onClick={handleClick}
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



      <div className="" style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: "center", }}>Đăng ký tài khoản</h1>
        <Form
          name="register-form"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
        >
          <Form.Item style={{ marginLeft: "500px" }}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Bạn vui lòng nhập email!',
              },
              {
                type: 'email',
                message: 'The input is not valid email!',
              },
            ]}
          >
            <Input style={{ width: "600px", textAlign: "center" }} />
          </Form.Item>

          <Form.Item style={{ marginLeft: "500px" }}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Bạn vui lòng nhập password!',
              },
              {
                min: 6,
                message: 'Password must be at least 6 characters',
              },
            ]}
          >
            <Input.Password style={{ width: "600px", textAlign: "center" }} />
          </Form.Item>

          <Form.Item style={{ marginLeft: "500px" }}
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Bạn vui lòng nhập đúng password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password style={{ width: "600px", textAlign: "center" }} />
          </Form.Item>

          <Form.Item style={{ marginLeft: "500px" }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          <h3 style={{ marginLeft: "500px" }}>
            Already have an account? <Link to="/admin">Login here.</Link>
          </h3>
        </Form>
        <div>

        </div>
      </div>




      <div className="footer" style={{ margin: "50px 0px 50px 0px", backgroundColor: "#111111", color: "#ffffff", height: "500px" }}>
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
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>MY ACCOUNT</h2>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>My Cart</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Login</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Wishlist</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Checkout</p>
          </Col>
          <Col span={6}>
            <h2 style={{ marginTop: "50px", marginLeft: "100px" }}>OUR SERVICE</h2>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>My Account</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>My Cart</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Login</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Wishlist</p>
            <p style={{ marginTop: "20px", marginLeft: "100px" }}>Checkout</p>

          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RegisterForm;