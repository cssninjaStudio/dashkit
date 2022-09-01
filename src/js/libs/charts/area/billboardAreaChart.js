import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardAreaChart() {
  const billboardAreaChart = document.getElementById("billboardAreaChart");

  if (typeof billboardAreaChart != "undefined" && billboardAreaChart != null) {
    const billboardAreaChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 300, 350, 300, 0, 0, 0],
          ["data2", 130, 100, 140, 200, 150, 50],
        ],
        colors: {
          data1: themeColors.primary,
          data2: themeColors.purple,
        },
        types: {
          data1: "area",
          data2: "area-spline",
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
      bindto: "#billboardAreaChart",
    });
  }
}
