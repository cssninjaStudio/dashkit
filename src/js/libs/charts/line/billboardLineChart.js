import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardLineChart() {
  const billboardLineChart = document.getElementById("billboardLineChart");

  if (typeof billboardLineChart != "undefined" && billboardLineChart != null) {
    const billboardLineChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.orange,
        },
      },
      size: {
        height: 212,
      },
      padding: {
        bottom: 20,
      },
      legend: {
        position: "inset",
      },
      bindto: "#billboardLineChart",
    });

    setTimeout(function () {
      billboardLineChartInstance.load({
        columns: [["data1", 230, 190, 300, 500, 300, 400]],
      });
    }, 5000);

    setTimeout(function () {
      billboardLineChartInstance.load({
        columns: [["data3", 130, 150, 200, 300, 200, 100]],
      });
    }, 6500);

    setTimeout(function () {
      billboardLineChartInstance.unload({
        ids: "data1",
      });
    }, 7000);
  }
}
