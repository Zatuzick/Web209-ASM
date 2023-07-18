import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input } from 'antd';
import { Upload } from 'antd';
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { getOneProduct } from "../../api/product";


const { Header, Content, Footer, Sider } = Layout;


const UpdateProductPage = (props: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    getOneProduct(id).then(({ data }) => setProduct(data.product));
  }, [])
  const [form] = Form.useForm();


  form.setFieldsValue({
    id: product?._id,
    name: product?.name,
    price: product?.price,
    image: product?.image,
    description: product?.description,
    categoryId: product?.categoryId
  })

  const onFinish = (values: any) => {


    props.onUpdate(values);

  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Menu
          theme="dark" mode="inline"
          defaultSelectedKeys={['4']}

        >
          <Menu.Item>
            <Link to={'/admin'}>Dashboard</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to={'/admin/category'}>Category</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={'/admin/products'}>Products</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', textAlign: "center" }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, }}>
            <Form form={form} style={{ maxWidth: 600, }} onFinish={onFinish} >
              <Form.Item
                label="id"
                name="id"
                style={{ display: 'none' }}
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>


              <Form.Item
                label=" Name"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="image"
                name="image"
                rules={[{ required: true, message: 'Bạn chưa nhập image sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Bạn chưa nhập Description sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Update Product
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};


export default UpdateProductPage