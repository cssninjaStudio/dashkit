import ApexCharts from 'apexcharts';
import { themeColors } from '../../utils/constants'

export function initApexRadialChart() {
    const apexRadialChart = document.getElementById('apexRadialChart');

    if (typeof (apexRadialChart) != 'undefined' && apexRadialChart != null) {
        const apexRadialChartOptions = {
            series: [70],
            chart: {
                height: 295,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            colors: [themeColors.primary],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '70%',
                    }
                },
            },
            labels: ['Power'],
        };

        const apexRadialChartInstance = new ApexCharts(
            apexRadialChart,
            apexRadialChartOptions
        );

        apexRadialChartInstance.render();
    }
}