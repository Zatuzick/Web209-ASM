import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Button,
  Layout, Menu, theme
} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Space } from 'antd';
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
const HomePage = (props: Props) => {

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
            label: <Link to="/">Trang chủ</Link>,
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
          width={1400}
          height={500}
          src={banner}
        />
      </div>

      <div className="site-layout-content">
        <div style={{ padding: "15px", margin: "100px", textAlign: "center", marginTop: "30px" }}>
          <Divider style={{ fontSize: "40px" }}>New Product</Divider>
          <Divider style={{ fontSize: "18px", marginBottom: "60px" }}>_______________________________________</Divider>
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

      <div className="site-layout-content">
        <div style={{ padding: "20px", margin: "100px", textAlign: "center" }}>
          <Divider style={{ fontSize: "40px" }}>Hot Products</Divider>
          <Divider style={{ fontSize: "18px", marginBottom: "60px" }}>_______________________________________</Divider>
          <Row gutter={[16, 16]}>
            {data.map((item) => (
              <Col key={item.id} span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<Image src={item.image} width={240} height={200} />}
                >
                  <Card.Meta title={item.name} description={<span style={{ color: 'red', justifyItems: "center", marginTop: "10px", }}>{item.price} ₫</span>} />
                  <Link to={`/products/${item.id}`}>
                    <Button style={{ marginTop: "10px", }}>Chi tiết</Button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>


      <Divider style={{ fontSize: "40px" }}>Our Blog</Divider>
      <Divider style={{ fontSize: "18px", marginBottom: "60px" }}>---------------------------------</Divider>
      <div className="" style={{ margin: '80px 80px 80px 180px', }}>
        <Row >
          <Col span={8} >
            <img style={{ marginBottom: "20px" }} width={360} height={260} src="https://cdn.tgdd.vn/Files/2023/04/09/1523912/reno-7-z-5g-801-090423-111632-600x400.jpg" alt="" />
            <span style={{ margin: "0px 0px 40px 0px" }}>10/04/2023</span>
            <h2 style={{ fontSize: "20px", marginRight: "10px" }}>Điện thoại OPPO cấu hình khoẻ, sale mạnh mẽ giá chỉ còn 7.49 triệu</h2>
            <p style={{ fontSize: "17px", marginRight: "10px" }}>Điện thoại OPPO là một trong những thương hiệu điện thoại nổi tiếng trên thị trường hiện nay. Với cấu hình mạnh mẽ, sản phẩm của OPPO được đánh giá cao về hiệu năng và tính năng. Hiện nay, Thế Giới Di Động đang có chương trình khuyến mãi với giá chỉ còn 7.49 triệu đồng cho loạt điện thoại OPPO, hứa hẹn đem lại cho người dùng trải nghiệm tốt nhất với giá cả hợp lý. </p>

          </Col>
          <Col span={8}>
            <img style={{ marginBottom: "20px" }} width={360} height={260} src="https://cdn.tgdd.vn/Files/2023/04/10/1524217/background94-100423-202401-800-resize.jpg" alt="" />
            <span style={{ margin: "0px 0px 40px 0px" }}> 07/04/2003</span>
            <h2 style={{ fontSize: "20px", marginRight: "10px" }}>Xiaomi 13 Ultra bị rò rỉ giá bán, xứng đáng là chiếc flagship đáng mua nhất của hãng</h2>
            <p style={{ fontSize: "17px", marginRight: "10px" }}>Tin đồn gần đây nhất cho rằng Xiaomi 13 Ultra và Xiaomi Pad 6 series sẽ ra mắt vào ngày 18/04 tại Trung Quốc. Và hôm nay, chiếc 13 Ultra đã xuất hiện trên Weibo với ba mức giá khác nhau. Mặc dù không có tên rõ ràng của thiết bị, nhưng trang web đề cập đến tên mã rút gọn "M1" đúng như các rò rỉ trước đó.</p>

          </Col>
          <Col span={8}>
            <img style={{ marginBottom: "20px" }} width={360} height={260} src="https://cdn.tgdd.vn/Files/2023/04/10/1524091/2-100423-160146-800-resize.jpg" alt="" />
            <span style={{ margin: "0px 0px 40px 0px" }}> 05/04/2023</span>
            <h2 style={{ fontSize: "20px" }}>Cùng xem chiếc 'iPhone 13 Pro chạy Android' đến từ thương hiệu Trung Quốc</h2>
            <p style={{ fontSize: "17px" }}>Gionee vừa giới thiệu sản phẩm mới nhất của hãng, Gionee F1 Plus tại thị trường Trung Quốc. Thương hiệu này đã nổi tiếng với việc phát hành các mẫu điện thoại giống với các flagship của Apple, Huawei và Xiaomi.</p>

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

export default HomePage;