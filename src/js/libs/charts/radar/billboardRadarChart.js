import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardRadarChart() {
  const billboardRadarChart = document.getElementById("billboardRadarChart");

  if (
    typeof billboardRadarChart != "undefined" &&
    billboardRadarChart != null
  ) {
    var billboardRadarChartInstance = bb.generate({
      data: {
        x: "x",
        columns: [
          ["x", "Data A", "Data B", "Data C", "Data D", "Data E"],
          ["data1", 330, 350, 200, 380, 150],
          ["data2", 130, 100, 30, 200, 80],
          ["data3", 230, 153, 85, 300, 250],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.primary,
          data4: themeColors.purple,
        },
        type: "radar",
        labels: true,
      },
      radar: {
        axis: {
          max: 400,
        },
        level: {
          depth: 4,
        },
        direction: {
          clockwise: true,
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
      bindto: "#billboardRadarChart",
    });
  }
}
