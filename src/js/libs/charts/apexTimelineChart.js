import moment from 'moment';
import ApexCharts from 'apexcharts';
import { themeColors } from '../utils/constants'

export function initApexTimelineChart() {
    const apexTimelineChart = document.getElementById('apexTimelineChart');

    if (typeof (apexTimelineChart) != 'undefined' && apexTimelineChart != null) {
        const apexTimelineChartOptions = {
            series: [
                {
                    data: [
                        {
                            x: 'A',
                            y: [
                                new Date('2020-02-04').getTime(),
                                new Date('2020-03-04').getTime()
                            ],
                            fillColor: themeColors.accent
                        },
                        {
                            x: 'D',
                            y: [
                                new Date('2020-03-04').getTime(),
                                new Date('2020-04-08').getTime()
                            ],
                            fillColor: themeColors.secondary
                        },
                        {
                            x: 'C',
                            y: [
                                new Date('2020-04-07').getTime(),
                                new Date('2020-05-10').getTime()
                            ],
                            fillColor: themeColors.orange
                        },
                        {
                            x: 'T',
                            y: [
                                new Date('2020-05-08').getTime(),
                                new Date('2020-06-12').getTime()
                            ],
                            fillColor: themeColors.info
                        },
                        {
                            x: 'P',
                            y: [
                                new Date('2020-06-12').getTime(),
                                new Date('2020-08-17').getTime()
                            ],
                            fillColor: themeColors.primary
                        }
                    ]
                }
            ],
            chart: {
                height: 280,
                type: 'rangeBar',
                toolbar: {
                    show: false
                },
            },
            colors: [themeColors.accent, themeColors.secondary, themeColors.orange, themeColors.purple, themeColors.green],
            plotOptions: {
                bar: {
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        hideOverflowingLabels: false
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                    var label = opts.w.globals.labels[opts.dataPointIndex]
                    var a = moment(val[0])
                    var b = moment(val[1])
                    var diff = b.diff(a, 'days')
                    return label + ': ' + diff + (diff > 1 ? 'd' : 'd')
                },
                style: {
                    colors: ['#f3f4f5', '#fff']
                }
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                show: false
            },
            grid: {
                row: {
                    colors: ['transparent'],
                    opacity: 1
                }
            }
        };

        const apexTimelineChartInstance = new ApexCharts(
            apexTimelineChart,
            apexTimelineChartOptions
        );

        apexTimelineChartInstance.render();
    }
}