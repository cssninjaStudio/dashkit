import { initApexAreaChart } from '../charts/apexAreaChart';
import { initApexLineChart } from '../charts/apexLineChart';
import { initApexSingleLineChart } from '../charts/apexSingleLineChart';
import { initApexStepLineChart } from '../charts/apexStepLineChart';
import { initApexBarChart } from '../charts/apexBarChart';
import { initApexBarMultipleChart } from '../charts/apexBarMultipleChart';
import { initApexBarStackedChart } from '../charts/apexBarStackedChart';
import { initApexBarColumnChart } from '../charts/apexBarColumnChart';
import { initApexBarHorizontalChart } from '../charts/apexBarHorizontalChart';
import { initApexBarHorizontalMultipleChart } from '../charts/apexBarHorizontalMultipleChart';
import { initApexTimelineChart } from '../charts/apexTimelineChart';
import { initApexBubbleChart } from '../charts/apexBubbleChart';
import { initApexScatterChart } from '../charts/apexScatterChart';
import { initApexPieChart } from '../charts/apexPieChart';
import { initApexDonutChart } from '../charts/apexDonutChart';
import { initApexRadialChart } from '../charts/apexRadialChart';
import { initApexRadialMultipleChart } from '../charts/apexRadialMultipleChart';
import { initApexRadialGaugeChart } from '../charts/apexRadialGaugeChart';
import { initApexRadarChart } from '../charts/apexRadarChart';
import { initApexGaugeChart } from '../charts/apexGaugeChart';

export function initApexCharts() {
    return {
        areaChart: initApexAreaChart(),
        lineChart: initApexLineChart(),
        singleLineChart: initApexSingleLineChart(),
        stepLineChart: initApexStepLineChart(),
        barChart: initApexBarChart(),
        barMultipleChart: initApexBarMultipleChart(),
        barStackedChart: initApexBarStackedChart(),
        barColumnChart: initApexBarColumnChart(),
        barHorizontalChart: initApexBarHorizontalChart(),
        barHorizontalMultipleChart: initApexBarHorizontalMultipleChart(),
        timelineChart: initApexTimelineChart(),
        bubbleChart: initApexBubbleChart(),
        scatterChart: initApexScatterChart(),
        pieChart: initApexPieChart(),
        donutChart: initApexDonutChart(),
        radialChart: initApexRadialChart(),
        radialMultipleChart: initApexRadialMultipleChart(),
        radialGaugeChart: initApexRadialGaugeChart(),
        radarChart: initApexRadarChart(),
        gaugeChart: initApexGaugeChart()
    }
}