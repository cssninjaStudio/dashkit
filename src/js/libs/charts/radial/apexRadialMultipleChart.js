import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexRadialMultipleChart() {
  const apexRadialMultipleChart = document.getElementById(
    "apexRadialMultipleChart"
  );

  if (
    typeof apexRadialMultipleChart != "undefined" &&
    apexRadialMultipleChart != null
  ) {
    const apexRadialMultipleChartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 295,
        type: "radialBar",
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
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    };

    const apexRadialMultipleChartInstance = new ApexCharts(
      apexRadialMultipleChart,
      apexRadialMultipleChartOptions
    );

    apexRadialMultipleChartInstance.render();
  }
}
