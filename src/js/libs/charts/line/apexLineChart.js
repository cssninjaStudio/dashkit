import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexLineChart() {
  const apexLineChart = document.getElementById("apexLineChart");

  if (typeof apexLineChart != "undefined" && apexLineChart != null) {
    const apexLineChartOptions = {
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      chart: {
        height: 198,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.accent, themeColors.primary, themeColors.orange],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [2, 2, 2],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - " +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ""
          );
        },
        position: "top",
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    };

    const apexLineChartInstance = new ApexCharts(
      apexLineChart,
      apexLineChartOptions
    );

    apexLineChartInstance.render();
  }
}
