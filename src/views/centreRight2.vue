<template>
  <div id="centreRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">板块毛利率对比</span>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-capsule-chart :config="config" style="width: 100%;height:160px" />
        <!-- ---------------------------------------- -->
        <centreRight2Chart1></centreRight2Chart1>
      </div>
    </div>
  </div>
</template>

<script>
import centreRight2Chart1 from "@/components/echart/centreRight2/centreRight2Chart1";
import { segmentCumulative } from "@/data/financialData";

export default {
  data() {
    const capsuleData = Object.keys(segmentCumulative)
      .filter(seg => segmentCumulative[seg].margin > 0)
      .map(seg => ({
        name: seg,
        value: Math.round(segmentCumulative[seg].margin)
      }));

    return {
      config: {
        data: capsuleData
      }
    };
  },
  components: { centreRight2Chart1 },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 5px;
  height: 400px;
  min-width: 300px;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: 405px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
