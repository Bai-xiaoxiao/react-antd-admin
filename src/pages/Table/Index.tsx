import React, { Component } from 'react'
import Search from '../../components/Search/Index'
import Table from '../../components/Table/Index'
import {Divider} from 'antd'

interface State {
  tableData: Array<tbItem>
}

interface tbItem {
  key: number,
  username: string,
  age: number,
  sex: '男' | '女'
}

export default class Index extends Component {
  constructor(props: any) {
    super(props)

    const arr:Array<tbItem> = [];
    for (let i = 0; i < 20; i++) {
      arr.push({key: i,username: `名字-${i}`, age: 18 + i, sex: i % 2 === 0 ? '男': '女'})
    }

    this.state.tableData = arr
  }

  state:State = {
    tableData: []
  }

  search = (values: object) => {
    //搜索
    console.log(values);
    const arr:Array<tbItem> = [];

    for (let i = 0; i < 20; i++) {
      arr.push({key: i,username: `名字-${i}`, age: 18 + i, sex: i % 2 === 0 ? '男': '女'})
    }

    this.setState({
      tableData: arr
    })
  }

  delItem = (key: number) => {
    // 删除
    let {tableData} = this.state
    this.setState({
      tableData: tableData.filter(item => item.key !== key)
    })
  }


  render() {
    return (
      <div>
        <Search submit={this.search} />
        <Divider>下面是表格</Divider>
        <Table delItem={this.delItem} tableData={this.state.tableData} />
      </div>
    )
  }
}
