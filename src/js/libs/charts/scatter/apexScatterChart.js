import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexScatterChart() {
  const apexScatterChart = document.getElementById("apexScatterChart");

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  if (typeof apexScatterChart != "undefined" && apexScatterChart != null) {
    const apexScatterChartOptions = {
      series: [
        {
          name: "Team 1",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Team 2",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Team 3",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Team 4",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            10,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Team 5",
          data: generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      chart: {
        height: 280,
        type: "scatter",
        zoom: {
          type: "xy",
        },
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.secondary,
        themeColors.orange,
        themeColors.primary,
        themeColors.info,
      ],
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        max: 70,
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
    };

    const apexScatterChartInstance = new ApexCharts(
      apexScatterChart,
      apexScatterChartOptions
    );

    apexScatterChartInstance.render();
  }
}
