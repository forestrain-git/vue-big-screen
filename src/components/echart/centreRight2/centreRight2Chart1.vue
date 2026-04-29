<template>
  <div>
    <div id="centreRight2Chart1" style="width:260px; height: 215px;"></div>
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
    this.drawPie();
  },
  methods: {
    drawPie(sidebar) {
      let myChart = echarts.init(
        document.getElementById("centreRight2Chart1")
      );

      const segments = Object.keys(segmentCumulative).slice(0, 6);
      const maxRevenue = Math.max(...segments.map(s => segmentCumulative[s].revenue));
      const maxCost = Math.max(...segments.map(s => segmentCumulative[s].cost));
      const maxProfit = Math.max(...segments.map(s => segmentCumulative[s].profit));
      const maxCollection = Math.max(...segments.map(s => segmentCumulative[s].collection));

      // Use first 3 segments for radar comparison
      const top3 = segments.slice(0, 3);
      const colors = ["#F9713C", "#B3E4A1", "rgb(238, 197, 102)"];

      const series = top3.map((seg, i) => ({
        name: seg,
        type: "radar",
        lineStyle: { normal: { width: 1, opacity: 0.5 } },
        data: [[
          (segmentCumulative[seg].revenue / maxRevenue * 100).toFixed(0),
          (segmentCumulative[seg].cost / maxCost * 100).toFixed(0),
          (segmentCumulative[seg].profit / maxProfit * 100).toFixed(0),
          (segmentCumulative[seg].collection / maxCollection * 100).toFixed(0),
          segmentCumulative[seg].margin
        ]],
        symbol: "none",
        itemStyle: { normal: { color: colors[i] } },
        areaStyle: { normal: { opacity: 0.08 } }
      }));

      let option = {
        radar: {
          indicator: [
            { name: "收入", max: 110 },
            { name: "成本", max: 110 },
            { name: "毛利", max: 110 },
            { name: "回款", max: 110 },
            { name: "毛利率", max: 80 }
          ],
          shape: "circle",
          splitNumber: 5,
          name: {
            textStyle: {
              color: "rgb(238, 197, 102)",
              fontSize: 10
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(238, 197, 102, 0.1)",
                "rgba(238, 197, 102, 0.2)",
                "rgba(238, 197, 102, 0.4)",
                "rgba(238, 197, 102, 0.6)",
                "rgba(238, 197, 102, 0.8)",
                "rgba(238, 197, 102, 1)"
              ].reverse()
            }
          },
          splitArea: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(238, 197, 102, 0.5)"
            }
          }
        },
        legend: {
          data: top3,
          textStyle: { color: "#fff", fontSize: 10 },
          bottom: 0,
          itemWidth: 12,
          itemHeight: 8
        },
        series: series
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
#centreRight2Chart1{
  margin: 0 auto;
}
</style>
