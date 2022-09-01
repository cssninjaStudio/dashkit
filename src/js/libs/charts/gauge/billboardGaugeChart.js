import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardGaugeChart() {
  const billboardGaugeChart = document.getElementById("billboardGaugeChart");

  if (
    typeof billboardGaugeChart != "undefined" &&
    billboardGaugeChart != null
  ) {
    const billboardGaugeChartInstance = bb.generate({
      data: {
        columns: [["data", 91.4]],
        type: "gauge",
        onclick: function (d, i) {
          console.log("onclick", d, i);
        },
        onover: function (d, i) {
          console.log("onover", d, i);
        },
        onout: function (d, i) {
          console.log("onout", d, i);
        },
      },
      gauge: {},
      color: {
        pattern: [
          themeColors.accent,
          themeColors.purple,
          themeColors.orange,
          themeColors.primary,
        ],
        threshold: {
          values: [30, 60, 90, 100],
        },
      },
      size: {
        height: 280,
      },
      padding: {
        bottom: 20,
      },
      legend: {
        position: "inset",
      },
      bindto: "#billboardGaugeChart",
    });

    setTimeout(function () {
      billboardGaugeChartInstance.load({
        columns: [["data", 10]],
      });
    }, 1000);

    setTimeout(function () {
      billboardGaugeChartInstance.load({
        columns: [["data", 50]],
      });
    }, 2000);

    setTimeout(function () {
      billboardGaugeChartInstance.load({
        columns: [["data", 70]],
      });
    }, 3000);

    setTimeout(function () {
      billboardGaugeChartInstance.load({
        columns: [["data", 0]],
      });
    }, 4000);

    setTimeout(function () {
      billboardGaugeChartInstance.load({
        columns: [["data", 100]],
      });
    }, 5000);
  }
}
