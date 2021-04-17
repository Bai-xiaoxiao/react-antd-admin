import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './styles/App.less'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import ClassNavLink from './components/ClassNavLink/Index'
import Home from './pages/Home/Index'
import ErrorPage from './pages/ErrorPage/Index'
const { Header, Sider, Content } = Layout;

export default class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <ClassNavLink path="/">主页</ClassNavLink>
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <ClassNavLink>12313</ClassNavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <ClassNavLink>12313</ClassNavLink>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <Switch>
              <Route exact path="/" component={Home}></Route>


              {/* 错误页面 */}
              <Route path="/404" component={ErrorPage}></Route>
              <Redirect to="/404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
