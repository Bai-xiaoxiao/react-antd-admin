import { Form, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router-dom'

import React, { Component } from 'react'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
interface Props {
  setRole: Function,
  history: any
}


class index extends Component<Props> {
   onFinish = (values: any) => {
    // this.props.setRole(values.username)
    localStorage.name = values.username;
    this.props.history.push('/layout')
  };

    onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>登录</h2>
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true, password: 123456 }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="admin-管理员   else-普通用户" />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}


export default withRouter(index as any);