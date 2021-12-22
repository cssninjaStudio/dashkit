import { initApexAreaChart } from '../../charts/area/apexAreaChart';
import { initApexLineChart } from '../../charts/line/apexLineChart';
import { initApexSingleLineChart } from '../../charts/line/apexSingleLineChart';
import { initApexStepLineChart } from '../../charts/step/apexStepLineChart';
import { initApexBarChart } from '../../charts/bar/apexBarChart';
import { initApexBarMultipleChart } from '../../charts/bar/apexBarMultipleChart';
import { initApexBarStackedChart } from '../../charts/bar/apexBarStackedChart';
import { initApexBarColumnChart } from '../../charts/bar/apexBarColumnChart';
import { initApexBarHorizontalChart } from '../../charts/bar/apexBarHorizontalChart';
import { initApexBarHorizontalMultipleChart } from '../../charts/bar/apexBarHorizontalMultipleChart';
import { initApexTimelineChart } from '../../charts/timeline/apexTimelineChart';
import { initApexBubbleChart } from '../../charts/bubble/apexBubbleChart';
import { initApexScatterChart } from '../../charts/scatter/apexScatterChart';
import { initApexPieChart } from '../../charts/pie/apexPieChart';
import { initApexDonutChart } from '../../charts/donut/apexDonutChart';
import { initApexRadialChart } from '../../charts/radial/apexRadialChart';
import { initApexRadialMultipleChart } from '../../charts/radial/apexRadialMultipleChart';
import { initApexRadialGaugeChart } from '../../charts/radial/apexRadialGaugeChart';
import { initApexRadarChart } from '../../charts/radar/apexRadarChart';
import { initApexGaugeChart } from '../../charts/gauge/apexGaugeChart';

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