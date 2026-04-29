<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">板块收入占比</span>
          <dv-decoration-3 style="width:100px;height:20px; position:relative;top:-3px;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <centreLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box" v-for="(item,index) in numberData" :key="index">
          <div class="d-flex">
            <span class="coin">￥</span>
            <dv-digital-flop :config="item.number" style="width:200px;height:50px;" />
          </div>
          <p class="text" style="text-align: center;">
            {{item.text}}
            <span class="colorYellow">(万元)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centreLeft1Chart from "@/components/echart/centreLeft1Chart";
import { yearlyData } from "@/data/financialData";

export default {
  data() {
    const years = Object.keys(yearlyData);
    const latest = yearlyData[years[years.length - 1]];
    return {
      numberData: [
        {
          number: {
            number: [latest.revenue],
            toFixed: 0,
            content: "{nt}"
          },
          text: "2025年收入"
        },
        {
          number: {
            number: [latest.cost],
            toFixed: 0,
            content: "{nt}"
          },
          text: "2025年成本"
        },
        {
          number: {
            number: [latest.profit],
            toFixed: 0,
            content: "{nt}"
          },
          text: "2025年毛利"
        },
        {
          number: {
            number: [latest.collection],
            toFixed: 0,
            content: "{nt}"
          },
          text: "2025年回款"
        }
      ]
    };
  },
  components: {
    centreLeft1Chart
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
#centreLeft1 {
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
  .chart-box {
    margin-top: 1rem;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }

  .bottom-data {
    .item-box {
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;
      // 金币
      .coin {
        position: absolute;
        left: 0px;
        top: 17px;
        font-size: 2rem;
        color: #ffc107;
      }
      .colorYellow {
        color: yellowgreen;
      }
    }
  }
}
</style>
