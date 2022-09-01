import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardBubbleChart() {
  const billboardBubbleChart = document.getElementById("billboardBubbleChart");

  if (
    typeof billboardBubbleChart != "undefined" &&
    billboardBubbleChart != null
  ) {
    const billboardBubbleChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", 30, 190, 200, 110, 150, 160, 50, 80, 55, 220],
          ["data2", 130, 100, 10, 143, 80, 50, 200, 123, 185, 98],
          ["data3", 160, 153, 85, 80, 250, 120, 5, 84, 99, 175],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.primary,
        },
        type: "bubble",
        labels: true,
      },
      bubble: {
        maxR: 50,
      },
      axis: {
        x: {
          type: "category",
        },
        y: {
          max: 450,
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
      bindto: "#billboardBubbleChart",
    });

    setTimeout(function () {
      billboardBubbleChartInstance.load({
        columns: [["data1", 100, 50, 150, 200, 100, 350, 58, 210, 80, 126]],
      });
    }, 1000);

    setTimeout(function () {
      billboardBubbleChartInstance.load({
        columns: [["data2", 305, 350, 55, 25, 335, 29, 258, 310, 180, 226]],
      });
    }, 2000);

    setTimeout(function () {
      billboardBubbleChartInstance.load({
        columns: [["data3", 223, 121, 259, 247, 53, 159, 95, 111, 307, 337]],
      });
    }, 3000);
  }
}
