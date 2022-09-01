import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexScatterChartDasboard() {
  const apexScatterChartDashboard = document.getElementById(
    "apexScatterChartDashboard"
  );

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

  if (
    typeof apexScatterChartDashboard != "undefined" &&
    apexScatterChartDashboard != null
  ) {
    const options2 = {
      series: [
        {
          name: "Tonic",
          data: generateDayWiseTimeSeries(
            new Date("Oct 11 2020 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Tantra",
          data: generateDayWiseTimeSeries(
            new Date("Oct 11 2020 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60,
            }
          ),
        },
        {
          name: "Vital",
          data: generateDayWiseTimeSeries(
            new Date("Oct 11 2020 GMT").getTime(),
            30,
            {
              min: 10,
              max: 60,
            }
          ),
        },
      ],
      chart: {
        height: 318,
        type: "scatter",
        zoom: {
          type: "xy",
        },
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.accent, themeColors.primary, themeColors.purple],
      dataLabels: {
        enabled: false,
        show: false,
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        show: false,
        type: "datetime",
      },
      yaxis: {
        show: false,
        max: 70,
      },
      legend: {
        show: false,
        position: "top",
        horizontalAlign: "center",
      },
    };

    const apexScatterChartDashboardInstance = new ApexCharts(
      apexScatterChartDashboard,
      options2
    );

    apexScatterChartDashboardInstance.render();
  }
}
