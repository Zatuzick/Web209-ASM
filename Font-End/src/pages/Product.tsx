import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Layout, Menu, theme
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from 'antd';
import { List } from 'antd';
import { Divider } from 'antd';
import { Steps } from 'antd';
import { Image } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from "react-router-dom";
import { IProduct } from "../types/product";
import banner from "../assets/banner-1.jpg"
const { Item } = Menu;
type Props = {};



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
const ProductPage = (props: Props) => {

  const [data, setData] = useState<IProduct[]>([])

  useEffect(() => {
    setData(props.products)
  }, [props])


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

      <div className="" style={{ margin: '10px 0px 100px', textAlign: "center" }}>
        <Image
          width={1220}
          height={270}
          src={banner}
        />
      </div>

      <div className="" style={{ margin: '10px 0px 100px', textAlign: "center" }}>
        <Row>
          <Col span={18} push={6}>
            <div style={{ padding: "5px", textAlign: "center" }}>
              <Divider style={{ fontSize: "25px" }}>Sản Phẩm Mới</Divider>
              <Row gutter={[16, 16]}>
                {data.map((item) => (
                  <Col key={item.id} span={6}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<Image src={item.image} width={240} height={200} />}
                    >

                      <Link to={`/products/${item.id}`}>
                        <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />

                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col span={6} pull={18}>
            <h2>CategoryID</h2>
            {data.map((item) => (
              <h3>{item.categoryId}</h3>
            ))}
          </Col>
        </Row>
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

export default ProductPage;