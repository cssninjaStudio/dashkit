import ApexCharts from 'apexcharts';
import { themeColors } from '../../utils/constants'

export function initApexBarHorizontalMultipleChart() {
    const apexBarHorizontalMultipleChart = document.getElementById('apexBarHorizontalMultipleChart');

    if (typeof (apexBarHorizontalMultipleChart) != 'undefined' && apexBarHorizontalMultipleChart != null) {
        const apexBarHorizontalMultipleChartOptions = {
            series: [{
                name: 'Completed',
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                name: 'Pending',
                data: [53, 32, 33, 52, 13, 44, 32]
            }],
            chart: {
                type: 'bar',
                height: 280,
                toolbar: {
                    show: false
                }
            },
            colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.green],
            plotOptions: {
                bar: {
                    horizontal: true,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
            }
        };

        const apexBarHorizontalMultipleChartInstance = new ApexCharts(
            apexBarHorizontalMultipleChart,
            apexBarHorizontalMultipleChartOptions
        );

        apexBarHorizontalMultipleChartInstance.render();
    }
}