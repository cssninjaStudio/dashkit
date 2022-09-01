import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexGaugeChart() {
  const apexGaugeChart = document.getElementById("apexGaugeChart");

  if (typeof apexGaugeChart != "undefined" && apexGaugeChart != null) {
    const apexGaugeChartOptions = {
      series: [76],
      chart: {
        height: 295,
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [
        themeColors.accent,
        themeColors.secondary,
        themeColors.orange,
        themeColors.purple,
        themeColors.info,
      ],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: false,
              top: 2,
              left: 0,
              color: "#999",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      grid: {
        padding: {
          //top: -10
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.1,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
    };

    const apexGaugeChartInstance = new ApexCharts(
      apexGaugeChart,
      apexGaugeChartOptions
    );

    apexGaugeChartInstance.render();
  }
}
