import React from 'react';
import { Layout, Menu, theme, message } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
type AddProductPagePops = {
  onAdd: Function[],
}
const AddProductPage = ({ onAdd }: any) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = async (values: any) => {
    try {
      await onAdd(values);

    } catch (error) {

    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"

      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['5']}>
          <Menu.Item>
            <Link to={'/admin/dash'}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={'/admin/products'}>Products</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={'/admin/category'}>Category</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 800, margin: '0 auto' }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >

              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Bạn chưa nhập name sản phẩm!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Bạn chưa nhập Price sản phẩm!!' }]}
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
              <Form.Item
                label="categoryId"
                name="categoryId"
                rules={[{ required: true, message: 'Bạn chưa nhập categoryId sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Add New Product
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

export default AddProductPage