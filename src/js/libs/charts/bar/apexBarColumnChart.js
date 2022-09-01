import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexBarColumnChart() {
  const apexBarColumnChart = document.getElementById("apexBarColumnChart");

  if (typeof apexBarColumnChart != "undefined" && apexBarColumnChart != null) {
    const apexBarColumnChartOptions = {
      series: [
        {
          name: "Corporate",
          data: [
            {
              x: "Team A",
              y: [1, 5],
            },
            {
              x: "Team B",
              y: [4, 6],
            },
            {
              x: "Team C",
              y: [5, 8],
            },
            {
              x: "Team D",
              y: [3, 11],
            },
          ],
        },
        {
          name: "Service",
          data: [
            {
              x: "Team A",
              y: [2, 6],
            },
            {
              x: "Team B",
              y: [1, 3],
            },
            {
              x: "Team C",
              y: [7, 8],
            },
            {
              x: "Team D",
              y: [5, 9],
            },
          ],
        },
      ],
      chart: {
        type: "rangeBar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.secondary,
        themeColors.orange,
        themeColors.purple,
        themeColors.green,
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
      dataLabels: {
        enabled: true,
      },
    };

    const apexBarColumnChartInstance = new ApexCharts(
      apexBarColumnChart,
      apexBarColumnChartOptions
    );

    apexBarColumnChartInstance.render();
  }
}
