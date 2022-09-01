import { bb } from "billboard.js";
import { themeColors } from "../../utils/constants";

export function initBillboardAreaRangeChart() {
  const billboardAreaRangeChart = document.getElementById(
    "billboardAreaRangeChart"
  );

  if (
    typeof billboardAreaRangeChart != "undefined" &&
    billboardAreaRangeChart != null
  ) {
    const billboardAreaRangeChartInstance = bb.generate({
      data: {
        x: "x",
        columns: [
          [
            "x",
            "2013-01-01",
            "2013-01-02",
            "2013-01-03",
            "2013-01-04",
            "2013-01-05",
            "2013-01-06",
          ],
          [
            "data1",
            [150, 140, 110],
            [155, 130, 115],
            [160, 135, 120],
            [135, 120, 110],
            [180, 150, 130],
            [199, 160, 125],
          ],
          ["data2", 130, 340, 200, 500, 250, 350],
        ],
        colors: {
          data1: themeColors.accent,
          data2: themeColors.secondary,
          data3: themeColors.orange,
          data4: themeColors.purple,
        },
        types: {
          data1: "area-line-range",
        },
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d",
          },
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
      bindto: "#billboardAreaRangeChart",
    });

    setTimeout(function () {
      billboardAreaRangeChartInstance.load({
        columns: [
          [
            "data3",
            [220, 215, 205],
            [240, 225, 215],
            [260, 235, 225],
            [280, 245, 235],
            [270, 255, 225],
            [240, 225, 215],
          ],
        ],
        types: {
          data3: "area-spline-range",
        },
      });
    }, 1000);

    setTimeout(function () {
      billboardAreaRangeChartInstance.load({
        columns: [
          [
            "data4",
            { high: 155, low: 145, mid: 150 },
            { high: 200, mid: 190, low: 150 },
            { high: 230, mid: 215, low: 200 },
            { high: 210, mid: 200, low: 180 },
            { high: 220, mid: 210, low: 190 },
            { high: 200, mid: 180, low: 160 },
          ],
        ],
        types: {
          data4: "area-spline-range",
        },
      });
    }, 1500);
  }
}
