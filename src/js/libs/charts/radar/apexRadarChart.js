import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexRadarChart() {
  const apexRadarChart = document.getElementById("apexRadarChart");

  if (typeof apexRadarChart != "undefined" && apexRadarChart != null) {
    const apexRadarChartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      chart: {
        height: 260,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      colors: [themeColors.primary],
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
      },
    };

    const apexRadarChartInstance = new ApexCharts(
      apexRadarChart,
      apexRadarChartOptions
    );

    apexRadarChartInstance.render();
  }
}
