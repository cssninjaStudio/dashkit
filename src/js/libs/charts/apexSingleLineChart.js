import ApexCharts from 'apexcharts';
import { themeColors } from '../utils/constants'

export function initApexSingleLineChart() {
    const apexSingleLineChart = document.getElementById('apexSingleLineChart');

    if (typeof (apexSingleLineChart) != 'undefined' && apexSingleLineChart != null) {
        const apexSingleLineChartOptions = {
            series: [{
                name: "Sales",
                data: [105, 414, 357, 511, 497, 621, 695, 912, 748]
            }],
            chart: {
                height: 198,
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                }
            },
            colors: [themeColors.secondary],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [2, 2, 2],
                curve: 'straight'
            },
            grid: {
                row: {
                    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        };

        const apexSingleLineChartInstance = new ApexCharts(
            apexSingleLineChart,
            apexSingleLineChartOptions
        );

        apexSingleLineChartInstance.render();
    }
}