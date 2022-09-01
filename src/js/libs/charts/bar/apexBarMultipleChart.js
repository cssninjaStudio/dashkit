import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexBarMultipleChart() {
  const apexBarMultipleChart = document.getElementById("apexBarMultipleChart");

  if (
    typeof apexBarMultipleChart != "undefined" &&
    apexBarMultipleChart != null
  ) {
    const apexBarMultipleChartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      colors: [
        themeColors.primary,
        themeColors.secondary,
        themeColors.orange,
        themeColors.purple,
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + "K";
          },
        },
      },
    };

    const apexBarMultipleChartInstance = new ApexCharts(
      apexBarMultipleChart,
      apexBarMultipleChartOptions
    );

    apexBarMultipleChartInstance.render();
  }
}
