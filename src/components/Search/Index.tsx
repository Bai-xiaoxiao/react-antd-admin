import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import { FormInstance } from 'antd/lib/form';
const { Option } = Select;

interface Props {
  submit: Function,
}

export default class Index extends Component<Props> {
  formRef = React.createRef<FormInstance>();

  submit = (values:any) => {
    // const values = this.formRef.current?.getFieldsValue()
    // console.log(values);
    this.props.submit(values);
  }

  render() {
    return (
      <div>
        <Form ref={this.formRef} onFinish={this.submit} initialValues={{sex: '男'}} layout="inline">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            label="用户名"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
            label="年龄"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            name="sex"
            label="性别"
          >
            <Select style={{ width: 120 }}>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
              <Option value="阴阳人" disabled>
                阴阳人
              </Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
