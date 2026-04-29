<template>
  <div>
    <div id="bottomRightChart" style="width:900px;height:480px;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import { getYears, getCollectionArray, getPaymentArray, getProfitArray } from "@/data/financialData";

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      let myChart = echarts.init(
        document.getElementById("bottomRightChart")
      );

      const years = getYears().map(y => y + "年");
      const collection = getCollectionArray().map(v => Math.round(v));
      const payment = getPaymentArray().map(v => Math.round(v));
      const profit = getProfitArray().map(v => Math.round(v));

      let color = {
        linearBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: "#1c98e8" },
            { offset: 1, color: "#28f8de" }
          ]
        },
        linearGtoB: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: "#43dfa2" },
            { offset: 1, color: "#28f8de" }
          ]
        },
        linearYtoR: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            { offset: 0, color: "#f5b44d" },
            { offset: 1, color: "#ff6b6b" }
          ]
        },
        areaBtoG: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(35,184,210,.2)" },
            { offset: 1, color: "rgba(35,184,210,0)" }
          ]
        },
        areaGtoY: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(248,211,81,.2)" },
            { offset: 1, color: "rgba(248,211,81,0)" }
          ]
        }
      };

      let option = {
        title: {
          text: "回款 / 付款 / 毛利趋势",
          textStyle: {
            color: "#D3D6DD",
            fontSize: 16,
            fontWeight: "normal"
          },
          top: 20,
          left: 80
        },
        legend: {
          top: 60,
          left: 80,
          orient: "vertical",
          itemGap: 15,
          itemWidth: 12,
          itemHeight: 12,
          data: ["回款", "付款", "毛利"],
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          formatter: function(params) {
            let result = params[0].name + '<br/>';
            params.forEach(p => {
              result += p.marker + p.seriesName + ': ' + p.value + '万元<br/>';
            });
            return result;
          }
        },
        grid: {
          left: 90,
          right: 80,
          bottom: 40,
          top: "30%"
        },
        xAxis: {
          type: "category",
          position: "bottom",
          axisLine: true,
          axisLabel: {
            color: "rgba(255,255,255,.8)",
            fontSize: 12
          },
          data: years
        },
        yAxis: {
          name: "万元",
          nameLocation: "end",
          nameGap: 24,
          nameTextStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: 14
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: { opacity: 0 }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              opacity: 0.1
            }
          },
          axisLabel: {
            color: "rgba(255,255,255,.8)",
            fontSize: 12
          }
        },
        series: [
          {
            name: "回款",
            type: "line",
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              normal: { color: "#fff" }
            },
            lineStyle: {
              normal: {
                color: color.linearBtoG,
                width: 3
              }
            },
            areaStyle: {
              normal: { color: color.areaBtoG }
            },
            data: collection
          },
          {
            name: "付款",
            type: "line",
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              normal: { color: "#f8d351" }
            },
            lineStyle: {
              normal: {
                color: "#f8d351",
                width: 3
              }
            },
            areaStyle: {
              normal: { color: color.areaGtoY }
            },
            data: payment
          },
          {
            name: "毛利",
            type: "line",
            smooth: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              normal: { color: "#ff6b6b" }
            },
            lineStyle: {
              normal: {
                color: "#ff6b6b",
                width: 2,
                type: "dashed"
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
