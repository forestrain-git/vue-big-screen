<template>
  <div>
    <div id="bottomLeftChart" style="width:900px;height:500px;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import { getYears, getRevenueArray, getCostArray, getProfitArray, getMarginArray } from "@/data/financialData";

export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => this.drawChart(), 1000);
  },
  methods: {
    drawChart() {
      let myChart = echarts.init(
        document.getElementById("bottomLeftChart")
      );

      const years = getYears().map(y => y + "年");
      const revenue = getRevenueArray().map(v => Math.round(v));
      const cost = getCostArray().map(v => Math.round(v));
      const profit = getProfitArray().map(v => Math.round(v));
      const margin = getMarginArray().map(v => v);

      let option = {
        title: {
          text: "",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          },
          formatter: function(params) {
            let result = params[0].name + '<br/>';
            params.forEach(p => {
              result += p.marker + p.seriesName + ': ' + p.value;
              if (p.seriesName === '毛利率') result += '%';
              else result += '万元';
              result += '<br/>';
            });
            return result;
          }
        },
        legend: {
          data: ["收入", "成本", "毛利", "毛利率"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "0%"
        },
        grid: {
          x: "8%",
          width: "88%",
          y: "4%"
        },
        xAxis: {
          data: years,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value}"
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value}%"
            }
          }
        ],
        series: [
          {
            name: "毛利率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: margin
          },
          {
            name: "收入",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },
            data: revenue
          },
          {
            name: "成本",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(156,107,211,0.8)" },
                  { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                  { offset: 1, color: "rgba(156,107,211,0.2)" }
                ])
              }
            },
            z: -12,
            data: cost
          },
          {
            name: "毛利",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#43dfa2" },
                  { offset: 1, color: "#28f8de" }
                ])
              }
            },
            data: profit
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize(), false);
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>
