import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexBarHorizontalChart() {
  const apexBarHorizontalChart = document.getElementById(
    "apexBarHorizontalChart"
  );

  if (
    typeof apexBarHorizontalChart != "undefined" &&
    apexBarHorizontalChart != null
  ) {
    const apexBarHorizontalChartOptions = {
      series: [
        {
          name: "Spaceships",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.secondary,
        themeColors.secondary,
        themeColors.orange,
        themeColors.purple,
        themeColors.green,
      ],
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany",
        ],
      },
    };

    const apexBarHorizontalChartInstance = new ApexCharts(
      apexBarHorizontalChart,
      apexBarHorizontalChartOptions
    );

    apexBarHorizontalChartInstance.render();
  }
}
