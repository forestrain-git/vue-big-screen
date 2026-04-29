<template>
  <div>
    <div id="centreLeft2Chart" style="width:330px; height: 370px;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import { getYears, getRevenueArray, getCostArray } from "@/data/financialData";

export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => this.drawChart(), 1000);
  },
  methods: {
    drawChart(sidebar) {
      let myChart = echarts.init(
        document.getElementById("centreLeft2Chart")
      );

      const years = getYears();
      const revenue = getRevenueArray();
      const cost = getCostArray();

      const colors = [
        "#f54d4d", "#f87544", "#ffae00", "#dcff00",
        "#25d053", "#01fff5", "#007cff"
      ];

      let option = {
        angleAxis: {
          interval: 1,
          type: "category",
          data: years.map(y => y + "年"),
          z: 10,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#00c7ff",
            margin: 8,
            fontSize: 11
          }
        },
        radiusAxis: {
          min: 0,
          max: 30000,
          interval: 6000,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value}",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          }
        },
        legend: {
          show: true,
          orient: "vartical",
          top: "center",
          bottom: "0%",
          itemWidth: 16,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#A3E2F4",
            fontSize: 12,
            fontWeight: 0
          },
          data: ["收入", "成本"]
        },
        polar: {},
        series: [
          {
            name: "收入",
            type: "bar",
            radius: ["20%", "100%"],
            data: revenue.map((val, i) => ({
              value: Math.round(val),
              itemStyle: {
                normal: {
                  color: colors[i % colors.length]
                }
              }
            })),
            coordinateSystem: "polar"
          },
          {
            name: "成本",
            type: "bar",
            radius: ["20%", "100%"],
            data: cost.map((val) => ({
              value: Math.round(val),
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.3)"
                }
              }
            })),
            coordinateSystem: "polar"
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize(), false);
      if (sidebar) {
        myChart.resize();
      }
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>
