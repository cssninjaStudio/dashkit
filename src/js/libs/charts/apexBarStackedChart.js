import ApexCharts from 'apexcharts';
import { themeColors } from '../utils/constants'

export function initApexBarStackedChart() {
    const apexBarStackedChart = document.getElementById('apexBarStackedChart');

    if (typeof (apexBarStackedChart) != 'undefined' && apexBarStackedChart != null) {
        const apexBarStackedChartOptions = {
            series: [{
                name: 'Desktops',
                data: [44, 55, 41, 67, 22, 43]
            }, {
                name: 'Phones',
                data: [13, 23, 20, 8, 13, 27]
            }, {
                name: 'Tablets',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: 'Hybrid',
                data: [21, 7, 25, 13, 22, 8]
            }],
            chart: {
                type: 'bar',
                height: 280,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            colors: [themeColors.accent, themeColors.secondary, themeColors.primary, themeColors.orange, themeColors.green],
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'top',
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT'
                ],
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
            },
            fill: {
                opacity: 1
            }
        };

        const apexBarStackedChartInstance = new ApexCharts(
            apexBarStackedChart,
            apexBarStackedChartOptions
        );

        apexBarStackedChartInstance.render();
    }
}