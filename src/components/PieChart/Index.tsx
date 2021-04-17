import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import React, { Component } from "react";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

interface Props {
  className: string,
  option: {}
}

export default class Index extends Component<Props> {
  myChart:any = {}

  componentDidUpdate() {
    this.myChart.dispose()
    this.drawChart()
  }

  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    const chartDom = document.getElementById("pie");
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.props.option)
    }
  }

  render() {
    return <div id="pie" className={this.props.className}></div>;
  }
}
