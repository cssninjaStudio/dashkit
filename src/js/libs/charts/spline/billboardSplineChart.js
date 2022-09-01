import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardSplineChart() {
  const billboardSplineChart = document.getElementById("billboardSplineChart");

  if (
    typeof billboardSplineChart != "undefined" &&
    billboardSplineChart != null
  ) {
    const billboardSplineChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 130, 100, 140, 200, 150, 50],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.orange,
          data4: themeColors.purple,
        },
        type: "spline",
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
      bindto: "#billboardSplineChart",
    });
  }
}
