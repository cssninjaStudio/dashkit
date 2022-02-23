import ApexCharts from 'apexcharts';
import { themeColors } from '../../utils/constants'

export function initApexBubbleChart() {
    const apexBubbleChart = document.getElementById('apexBubbleChart');

    function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

    if (typeof (apexBubbleChart) != 'undefined' && apexBubbleChart != null) {
        const apexBubbleChartOptions = {
            series: [{
                name: 'Bubble1',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble2',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble3',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'Bubble4',
                data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            }],
            chart: {
                height: 280,
                type: 'bubble',
                toolbar: {
                    show: false
                }
            },
            colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.primary, themeColors.green],
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            xaxis: {
                tickAmount: 12,
                type: 'category',
            },
            yaxis: {
                max: 70
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
            }
        };

        const apexBubbleChartInstance = new ApexCharts(
            apexBubbleChart,
            apexBubbleChartOptions
        );

        apexBubbleChartInstance.render();
    }
}