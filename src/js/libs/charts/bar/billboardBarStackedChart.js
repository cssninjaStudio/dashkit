import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardBarStackedChart() {
  const billboardBarStackedChart = document.getElementById(
    "billboardBarStackedChart"
  );

  if (
    typeof billboardBarStackedChart != "undefined" &&
    billboardBarStackedChart != null
  ) {
    const billboardBarStackedChartInstance = bb.generate({
      data: {
        columns: [
          ["data1", -30, 200, 200, 400, -150, 250],
          ["data2", 130, 100, -100, 200, -150, 50],
          ["data3", -230, 200, 200, -300, 250, 250],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.primary,
          data4: themeColors.purple,
        },
        type: "bar",
        groups: [["data1", "data2"]],
      },
      grid: {
        y: {
          lines: [
            {
              value: 0,
            },
          ],
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
      bindto: "#billboardBarStackedChart",
    });

    setTimeout(function () {
      billboardBarStackedChartInstance.groups([["data1", "data2", "data3"]]);
    }, 1000);

    setTimeout(function () {
      billboardBarStackedChartInstance.load({
        columns: [["data4", 100, -50, 150, 200, -300, -100]],
      });
    }, 1500);

    setTimeout(function () {
      billboardBarStackedChartInstance.groups([
        ["data1", "data2", "data3", "data4"],
      ]);
    }, 2000);
  }
}
