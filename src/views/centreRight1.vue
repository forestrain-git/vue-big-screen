<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">板块财务明细</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board :config="config" style="width:270px;height:360px" />
      </div>
    </div>
  </div>
</template>

<script>
import { segmentCumulative } from "@/data/financialData";

export default {
  data() {
    const segments = Object.keys(segmentCumulative);
    const tableData = segments.map(seg => {
      const d = segmentCumulative[seg];
      const marginColor = d.margin >= 0 ? 'colorGrass' : 'colorRed';
      return [
        seg,
        Math.round(d.revenue) + '',
        Math.round(d.cost) + '',
        `<span class='${marginColor}'>${d.margin.toFixed(1)}%</span>`
      ];
    });

    return {
      config: {
        header: ["板块", "收入", "成本", "毛利率"],
        data: tableData,
        rowNum: 7,
        headerHeight: 35,
        headerBGC: "#0f1325",
        oddRowBGC: "#0f1325",
        evenRowBGC: "#171c33",
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight1 {
  padding: 1rem;
  height: 410px;
  min-width: 300px;
  border-radius: 5px;
  .bg-color-black {
    height: 385px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
