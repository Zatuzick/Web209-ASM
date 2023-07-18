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
import { useParams } from 'react-router-dom'
import { Image } from 'antd';
import { Link } from "react-router-dom";
import { IProduct } from "../types/product";
import { Footer } from "antd/es/layout/layout";
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
const ProductDetailPage = (props: Props) => {

  const { _id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    const currentProduct = props.products.find(item => item._id === Number(_id))
    setProduct(currentProduct)

  })
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

      <div className="" style={{ marginLeft: "140px", }}>
        <Row>
          <Col span={10}>
            <img width={400} height={300} src={product?.image} alt={product?.name} />
          </Col>
          <Col span={12}>
            <h2>{product?.name}</h2>
            <p>----</p>
            <p>{product?.price}</p>
            <p style={{ width: "460px", color: "#666666" }}>{product?.description}</p>
          </Col>
        </Row>
      </div>
      {/* <hr /> */}

      <div className="" style={{ marginLeft: "140px", marginTop: "200px" }}>
        <h4 style={{ fontSize: "24px" }}>Description</h4>
        <p style={{ color: "#666666" }} >{product?.description}</p>
      </div>
      <div className="site-layout-content">
        <div style={{ padding: "15px", margin: "100px", textAlign: "center", marginTop: "30px" }}>
          <Divider style={{ fontSize: "40px" }}>Other Products</Divider>
          <Divider style={{ fontSize: "18px", marginBottom: "60px" }}>-------------------------------------------</Divider>
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

export default ProductDetailPage;