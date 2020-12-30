import ApexCharts from 'apexcharts';
import { themeColors } from '../utils/constants'

export function initApexPieChart() {
    const apexPieChart = document.getElementById('apexPieChart');

    if (typeof (apexPieChart) != 'undefined' && apexPieChart != null) {
        const apexPieChartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                width: 425,
                type: 'pie',
            },
            colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.info, themeColors.primary],
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 315,
                        toolbar: {
                            show: false
                        }
                    },
                    legend: {
                        position: 'top'
                    }
                }
            }],
            legend: {
                position: 'right',
                horizontalAlign: 'center',
            }
        };

        const apexPieChartInstance = new ApexCharts(
            apexPieChart,
            apexPieChartOptions
        );

        apexPieChartInstance.render();
    }
}