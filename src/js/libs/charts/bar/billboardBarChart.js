import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardBarChart() {
  const billboardBarChart = document.getElementById("billboardBarChart");

  if (typeof billboardBarChart != "undefined" && billboardBarChart != null) {
    const billboardBarChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 130, 100, 140, 200, 150, 50],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.primary,
          data4: themeColors.purple,
        },
        type: "bar",
      },
      bar: {
        width: {
          ratio: 0.5,
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
      bindto: "#billboardBarChart",
    });

    setTimeout(function () {
      billboardBarChartInstance.load({
        columns: [["data3", 130, -150, 200, 300, -200, 100]],
      });
    }, 1000);
  }
}
