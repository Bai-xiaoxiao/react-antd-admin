import React, { Component } from "react";
import { Table, Button, Popconfirm } from "antd";

interface State {
  loading?: boolean,
  selectedRowKeys: Array<string | number>,
  // 等效于下面
  // selectedRowKeys: (string | number)[]
  showPopconfirm: boolean
}

interface Props {
  tableData: Array<object>,
  delItem: Function
}

export default class Index extends Component<Props> {
  state:State = {
    selectedRowKeys: [],
    showPopconfirm: false
  }

  columns: Array<object> = [
    {title: '姓名', dataIndex: 'username'},
    {title: '年龄', dataIndex: 'age'},
    {title: '性别', dataIndex: 'sex'},
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => {
        //  console.log(text, record);
        return (
          <Popconfirm
            key={record.key}
            title="Are you sure to delete this task?"
            onConfirm={this.delItem(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <Button onClick={() => this.setState({showPopconfirm: true})} type="primary" danger size="small">删除</Button>
          </Popconfirm>
        )
      },
    },
  ]

  onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
    this.setState({selectedRowKeys})
  }

  delItem = (key: number) => {
    // 删除
    return () => {
      console.log(key);
      this.props.delItem(key);
    }
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          dataSource={this.props.tableData}
        />
      </div>
    );
  }
}
