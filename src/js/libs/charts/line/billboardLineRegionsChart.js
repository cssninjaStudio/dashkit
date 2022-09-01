import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardLineRegionsChart() {
  const billboardLineRegionsChart = document.getElementById(
    "billboardLineRegionsChart"
  );

  if (
    typeof billboardLineRegionsChart != "undefined" &&
    billboardLineRegionsChart != null
  ) {
    const billboardLineRegionsChartInstance = bb.generate({
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
        regions: {
          data1: [
            {
              start: 1,
              end: 2,
              style: {
                dasharray: "6 2",
              },
            },
            {
              start: 3,
              style: {
                dasharray: "2 3",
              },
            },
          ],
          data2: [
            {
              end: 3,
            },
          ],
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
      bindto: "#billboardLineRegionsChart",
    });
  }
}
