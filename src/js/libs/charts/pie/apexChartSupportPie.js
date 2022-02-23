import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexSupportPieChart() {
  const apexPieChart = document.getElementById("supportPie");

  if (typeof apexPieChart != "undefined" && apexPieChart != null) {
    const apexPieChartOptions = {
      series: [78, 22],
      chart: {
        width: 155,
        type: "pie",
      },
      colors: [themeColors.primary, themeColors.lightGreen],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        position: "right",
        horizontalAlign: "center",
      },
    };

    const apexPieChartInstance = new ApexCharts(
      apexPieChart,
      apexPieChartOptions
    );

    apexPieChartInstance.render();
  }
}
