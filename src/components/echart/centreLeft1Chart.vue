<template>
  <div>
    <div id="centreLeft1Chart" style="width:260px; height: 220px;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
import { segmentCumulative } from "@/data/financialData";

export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => this.drawPie(), 1000);
  },
  methods: {
    drawPie(sidebar) {
      let myChartPieLeft = echarts.init(
        document.getElementById("centreLeft1Chart")
      );

      const segments = Object.keys(segmentCumulative);
      const pieData = segments.map(seg => ({
        name: seg,
        value: Math.round(segmentCumulative[seg].revenue)
      }));

      myChartPieLeft.setOption({
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}万元 ({d}%)"
        },
        toolbox: {
          show: true
        },
        calculable: true,
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 0,
          x: "center",
          data: segments,
          textStyle: {
            color: "#fff",
            fontSize: 10
          }
        },
        series: [
          {
            name: "板块累计收入",
            type: "pie",
            radius: [10, 60],
            roseType: "area",
            center: ["50%", "40%"],
            data: pieData
          }
        ]
      });
      window.addEventListener("resize", () => myChartPieLeft.resize(), false);
      if (sidebar) {
        myChartPieLeft.resize();
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
