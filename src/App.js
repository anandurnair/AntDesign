import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { DatePicker, Space,Spin } from 'antd';
import { Color } from 'antd/es/color-picker';
import { LoadingOutlined } from '@ant-design/icons'; // Import the loading icon

const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const spinnerIcon = (
    <LoadingOutlined
      style={{ fontSize: 24, color: 'red' }} // Customize the size and color here
      spin
    />
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            height:800,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <Spin indicator={spinnerIcon} />
  </Space>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;