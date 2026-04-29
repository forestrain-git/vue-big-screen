<template>
  <div id="center">
    <div class="up">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="ml-3 colorBlue fw-b">{{item.title}}</p>
        <div>
          <dv-digital-flop :config="item.number" style="width:100px;height:50px;" />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1">板块累计收入排行</span>
        <dv-scroll-ranking-board :config="ranking" style="height:220px" />
      </div>
      <div class="percent">
        <div class="item  bg-color-black">
          <span>累计毛利率</span>
          <centerChart1 />
        </div>
        <div class="item  bg-color-black">
          <span>回款率</span>
          <centerChart2 />
        </div>
        <div class="water">
          <dv-water-level-pond :config="water" style="height: 120px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerChart1 from "@/components/echart/center/centerChart1";
import centerChart2 from "@/components/echart/center/centerChart2";
import { totalCumulative, segmentCumulative } from "@/data/financialData";

export default {
  data() {
    return {
      titleItem: [
        {
          title: "累计收入(万元)",
          number: {
            number: [totalCumulative.revenue],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "累计成本(万元)",
          number: {
            number: [totalCumulative.cost],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "累计毛利(万元)",
          number: {
            number: [totalCumulative.profit],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "累计回款(万元)",
          number: {
            number: [totalCumulative.collection],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "累计付款(万元)",
          number: {
            number: [totalCumulative.payment],
            toFixed: 0,
            content: "{nt}"
          }
        },
        {
          title: "综合毛利率",
          number: {
            number: [totalCumulative.margin],
            toFixed: 1,
            content: "{nt}%"
          }
        }
      ],
      ranking: {
        data: Object.keys(segmentCumulative).map(seg => ({
          name: seg,
          value: Math.round(segmentCumulative[seg].revenue)
        })),
        waitTime: 4000,
        carousel: "page",
        unit: "万元"
      },
      water: {
        data: [Math.round(totalCumulative.margin)],
        shape: 'roundRect',
        formatter:'{value}%',
        waveNum:3
      }
    };
  },
  components: {
    centerChart1,
    centerChart2
  }
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 5px;
      padding-top: 1rem;
      margin-top: 0.5rem;
      width: 32%;
      height: 70px;
    }
  }
  .down {
    padding: 4px;
    padding-bottom: 0px;
    width: 100%;
    display: flex;
    height: 255px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 59%;
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 120px;
        span {
          margin-top: 7px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
      }
    }
  }
}
</style>
