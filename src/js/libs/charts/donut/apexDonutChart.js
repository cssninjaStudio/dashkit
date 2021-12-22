import ApexCharts from 'apexcharts';
import { themeColors } from '../../utils/constants'

export function initApexDonutChart() {
    const apexDonutChart = document.getElementById('apexDonutChart');

    if (typeof (apexDonutChart) != 'undefined' && apexDonutChart != null) {
        const apexDonutChartOptions = {
            series: [44, 55, 41, 17, 15],
            chart: {
                width: 405,
                type: 'donut',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.primary, themeColors.info],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 280,
                        toolbar: {
                            show: false
                        },
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

        const apexDonutChartInstance = new ApexCharts(
            apexDonutChart,
            apexDonutChartOptions
        );

        apexDonutChartInstance.render();
    }
}