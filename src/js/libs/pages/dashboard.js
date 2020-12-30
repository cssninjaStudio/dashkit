import { initApexAreaChartDasboard } from '../charts/apexChartAreaDashboard';
import { initApexScatterChartDasboard } from '../charts/apexChartScatterDashboard';

export function initDashboard() {
    return {
        areaChart: initApexAreaChartDasboard(),
        scatterChart: initApexScatterChartDasboard()
    }
}