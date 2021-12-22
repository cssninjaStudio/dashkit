
export type ColorFn =
  | 'rgba'
  | 'adjusthue'
  | 'saturate'
  | 'desaturate'
  | 'lighten'
  | 'darken'
  | 'color-invert'
  | 'dark-color'
  | 'light-color'

export interface ColorFnCall {
  fn: ColorFn
  fnArg: string | null
  composeArg: ColorFnCall | null
}

export interface ColorCallSet {
  [color: string]: {
    calls: ColorFnCall[],
  }
}
export const bulmaCssVariablesDefs: ColorCallSet = {
  "danger": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "dark": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "70",
        "composeArg": null
      },
      {
        "fn": "lighten",
        "fnArg": "800",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "info": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "link": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "primary": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "success": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "warning": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "white": {
    "calls": [
      {
        "fn": "rgba",
        "fnArg": "100",
        "composeArg": null
      },
      {
        "fn": "rgba",
        "fnArg": "25",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "250",
        "composeArg": null
      },
      {
        "fn": "darken",
        "fnArg": "500",
        "composeArg": null
      },
      {
        "fn": "lighten",
        "fnArg": "800",
        "composeArg": null
      }
    ]
  }
}
