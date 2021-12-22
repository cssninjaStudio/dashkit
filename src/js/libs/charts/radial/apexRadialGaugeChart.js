import ApexCharts from 'apexcharts';
import { themeColors } from '../../utils/constants'

export function initApexRadialGaugeChart() {
    const apexRadialGaugeChart = document.getElementById('apexRadialGaugeChart');

    if (typeof (apexRadialGaugeChart) != 'undefined' && apexRadialGaugeChart != null) {
        const apexRadialGaugeChartOptions = {
            series: [67],
            chart: {
                height: 295,
                type: 'radialBar',
                offsetY: -10,
                toolbar: {
                    show: false
                }
            },
            colors: [themeColors.primary],
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Median Ratio'],
        };

        const apexRadialGaugeChartInstance = new ApexCharts(
            apexRadialGaugeChart,
            apexRadialGaugeChartOptions
        );

        apexRadialGaugeChartInstance.render();
    }
}