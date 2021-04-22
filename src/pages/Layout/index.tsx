import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "../../styles/App.less";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import ClassNavLink from "../../components/ClassNavLink/Index";
import Home from "../Home";
import ErrorPage from '../ErrorPage'

import Table from "../Table";
const { Header, Sider, Content } = Layout;
interface Props {
  location: any
}

const adminRoute = [
  {path: '/layout/home', name: '数据看板', component: Home},
  {path: '/layout/table', name: '数据表格和搜索',  component: Table},
];
const noRoleRoute = [
  {path: '/layout/norole', name: '没权限的',  component: ErrorPage}
]

export default class index extends Component<Props> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const name = localStorage.name
    const menus = name === 'admin' ? adminRoute : noRoleRoute;

    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              {
                menus.map(item => (
                  <Menu.Item key={item.name}>
                    <ClassNavLink path={item.path}>{item.name}</ClassNavLink>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: "100vh",
              }}
            >
              <Switch>
                {
                  menus.map(item => (
                    <Route path={item.path} component={item.component} />
                  ))
                }
                <Redirect to={name === 'admin' ? adminRoute[0].path : noRoleRoute[0].path} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
        {/* 错误页面 */}
      </div>
    );
  }
}
