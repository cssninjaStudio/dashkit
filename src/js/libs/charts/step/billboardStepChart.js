import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardStepChart() {
  const billboardStepChart = document.getElementById("billboardStepChart");

  if (typeof billboardStepChart != "undefined" && billboardStepChart != null) {
    const billboardStepChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 300, 350, 300, 0, 0, 100],
          ["data2", 130, 100, 140, 200, 150, 50],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.purple,
        },
        types: {
          data1: "step",
          data2: "area-step",
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
      bindto: "#billboardStepChart",
    });
  }
}
