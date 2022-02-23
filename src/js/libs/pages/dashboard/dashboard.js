import { initApexAreaChartDasboard } from '../../charts/area/apexChartAreaDashboard';
import { initApexScatterChartDasboard } from '../../charts/scatter/apexChartScatterDashboard';

export function initDashboard() {
    return {
        areaChart: initApexAreaChartDasboard(),
        scatterChart: initApexScatterChartDasboard()
    }
}