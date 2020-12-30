import { initBillboardLineChart } from '../charts/billboardLineChart';
import { initBillboardLineRegionsChart } from '../charts/billboardLineRegionsChart';
import { initBillboardAreaChart } from '../charts/billboardAreaChart';
import { initBillboardAreaRangeChart } from '../charts/billboardAreaRangeChart';
import { initBillboardBarChart } from '../charts/billboardBarChart';
import { initBillboardBarStackedChart } from '../charts/billboardBarStackedChart';
import { initBillboardStepChart } from '../charts/billboardStepChart';
import { initBillboardSplineChart } from '../charts/billboardSplineChart';
import { initBillboardBubbleChart } from '../charts/billboardBubbleChart';
import { initBillboardScatterChart } from '../charts/billboardScatterChart';
import { initBillboardPieChart } from '../charts/billboardPieChart';
import { initBillboardDonutChart } from '../charts/billboardDonutChart';
import { initBillboardGaugeChart } from '../charts/billboardGaugeChart';
import { initBillboardRadarChart } from '../charts/billboardRadarChart';

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
    }
}