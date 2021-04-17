import React, { Component } from "react";
import Style from './index.module.css'
import PieChart from '../../components/PieChart/Index'
import {Button} from 'antd'

const pieOption = {
  title: {
    text: "某站点用户访问来源",
    subtext: "纯属虚构",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "直接访问" },
        { value: 580, name: "邮件营销" },
        { value: 484, name: "联盟广告" },
        { value: 300, name: "视频广告" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export default class Index extends Component {
  reset = () => {
    //函数体
    this.setState({});
  }

  render() {
    return (
      <div>
        <Button onClick={this.reset}>点我重新渲染</Button>
        <br />
        <div className={Style['row']}>
          <div><PieChart option={pieOption} className={Style['chart']} /></div>
          <div>2</div>
        </div>
      </div>
    );
  }
}
