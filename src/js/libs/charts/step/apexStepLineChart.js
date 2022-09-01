import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexStepLineChart() {
  const apexStepLineChart = document.getElementById("apexStepLineChart");

  if (typeof apexStepLineChart != "undefined" && apexStepLineChart != null) {
    const apexStepLineChartOptions = {
      series: [
        {
          name: "New members",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58, 79],
        },
      ],
      chart: {
        type: "line",
        height: 198,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: "stepline",
      },
      colors: [themeColors.primary],
      dataLabels: {
        enabled: false,
      },
      markers: {
        hover: {
          sizeOffset: 4,
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
    };

    const apexStepLineChartInstance = new ApexCharts(
      apexStepLineChart,
      apexStepLineChartOptions
    );

    apexStepLineChartInstance.render();
  }
}
