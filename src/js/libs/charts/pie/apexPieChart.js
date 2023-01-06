import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexPieChart() {
  const apexPieChart = document.getElementById("apexPieChart");

  if (typeof apexPieChart != "undefined" && apexPieChart != null) {
    const apexPieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: [
        themeColors.accent,
        themeColors.secondary,
        themeColors.orange,
        themeColors.primary,
        themeColors.info,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const apexPieChartInstance = new ApexCharts(
      apexPieChart,
      apexPieChartOptions
    );

    apexPieChartInstance.render();
  }
}
