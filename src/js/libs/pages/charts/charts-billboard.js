import { initBillboardLineChart } from "../../charts/line/billboardLineChart";
import { initBillboardLineRegionsChart } from "../../charts/line/billboardLineRegionsChart";
import { initBillboardAreaChart } from "../../charts/area/billboardAreaChart";
import { initBillboardAreaRangeChart } from "../../charts/area/billboardAreaRangeChart";
import { initBillboardBarChart } from "../../charts/bar/billboardBarChart";
import { initBillboardBarStackedChart } from "../../charts/bar/billboardBarStackedChart";
import { initBillboardStepChart } from "../../charts/step/billboardStepChart";
import { initBillboardSplineChart } from "../../charts/spline/billboardSplineChart";
import { initBillboardBubbleChart } from "../../charts/bubble/billboardBubbleChart";
import { initBillboardScatterChart } from "../../charts/scatter/billboardScatterChart";
import { initBillboardPieChart } from "../../charts/pie/billboardPieChart";
import { initBillboardDonutChart } from "../../charts/donut/billboardDonutChart";
import { initBillboardGaugeChart } from "../../charts/gauge/billboardGaugeChart";
import { initBillboardRadarChart } from "../../charts/radar/billboardRadarChart";

export function initBillboardCharts() {
  return {
    lineChart: initBillboardLineChart(),
    lineRegionsChart: initBillboardLineRegionsChart(),
    areaChart: initBillboardAreaChart(),
    areaRangeChart: initBillboardAreaRangeChart(),
    barChart: initBillboardBarChart(),
    barStackedChart: initBillboardBarStackedChart(),
    stepChart: initBillboardStepChart(),
    splineChart: initBillboardSplineChart(),
    bubbleChart: initBillboardBubbleChart(),
    scatterChart: initBillboardScatterChart(),
    pieChart: initBillboardPieChart(),
    donutChart: initBillboardDonutChart(),
    gaugeChart: initBillboardGaugeChart(),
    radarChart: initBillboardRadarChart(),
  };
}
