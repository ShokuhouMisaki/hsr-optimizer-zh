import logo from './logo.svg';

import React, {useEffect} from "react"
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, notification, Typography, message, Flex } from 'antd';
import MenuDrawer from './components/MenuDrawer'
import Tabs from './components/Tabs'
import { SmileOutlined } from '@ant-design/icons';

import {
  ConfigProvider,
} from 'antd';

const { Header, Sider, Content, Footer } = Layout;

let hashes = [
  '#scorer',
  '#getting-started',
  '#beta'
]

const App = () => {
  const [notificationApi, notificationContextHolder] = notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();
  const [activeKey, setActiveKey] = React.useState(hashes.includes(window.location.hash) ? window.location.hash : 'optimizer');

  window.notificationApi = notificationApi
  window.messageApi = messageApi

  useEffect(() => {
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#182239',
          opacityLoading: 0.2
        },
        algorithm: theme.darkAlgorithm,
      }}
    >      
      {notificationContextHolder}
      {messageContextHolder}
        <Layout hasSider style={{ 'minHeight': '100%', minWidth: 1300 }}>
          <Sider
            width={200}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'sticky',
              top: 0,
            }}
          >
            <MenuDrawer setActiveKey={setActiveKey} hashes={hashes}/>
          </Sider>
          <Layout
            style={{
            }}
          >

            <Header
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
                height: 48,
                width: '100%'
              }}
            >
              <a href="/hsr-optimizer">
                <Flex align='center'>
                  <img src={Assets.getLogo()} style={{ width: 30, height: 30, marginRight: 25 }}></img>
                  <Typography
                    style={{ fontWeight: 600, fontSize: 22 }}
                    color="inherit"
                  >
                    Fribbels Honkai Star Rail Optimizer
                  </Typography>
                </Flex>
              </a>
            </Header>
            <Content
              style={{
                padding: 10,
                margin: 0,
                minHeight: 280,
                minWidth: 1300,
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'initial',
              }}
            >
              <Tabs activeKey={activeKey} hashes={hashes} />
            </Content>
          </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default App;