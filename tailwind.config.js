/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eff2f5",
        },
        "gray-white": "#fff",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury":
          "#e3e3e3",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray":
          "#171717",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10":
          "rgba(238, 104, 85, 0.1)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo":
          "#e96975",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft":
          "#202020",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6":
          "rgba(10, 178, 125, 0.06)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock":
          "#32be88",
        mintcream: "#ebf9f4",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dedfe2",
          "300": "#d1e0db",
        },
        mediumseagreen: "#14b079",
        "gray-1": "#0f152a",
        "primary-blue": "#0052fe",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude":
          "#e8f4fd",
        "day-gray-06": "#788f9b",
        "gray-2": "#3e424a",
        orange: "#faa002",
        dodgerblue: "#0082ff",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray1":
          "#1d1d1d",
        lightgray: "rgba(201, 207, 221, 0.6)",
        gray: {
          "100": "#111827",
          "200": "#0b1426",
        },
        "groww-in-stocks-zomato-ltd-1440x810-default-waterloo": "#7c7e8c",
        "absolute-red": "#f7324c",
        "groww-in-stocks-zomato-ltd-1440x810-default-french-gray": "#c7c8ce",
        "groww-in-stocks-zomato-ltd-1440x810-default-persian-green": "#00b386",
        "absolute-green": "#0fba83",
        "day-gray-07": "#3e5765",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark":
          "#191c1f",
        "groww-in-stocks-zomato-ltd-1440x810-default-gun-powder": "#44475b",
        "day-gray-04": "#d3e0e6",
        "gray-3": "#768396",
        "absolute-black": "#000",
        "primary-darkblue": "#0141cf",
        dimgray: "#666",
        darkslategray: "#333",
        slategray: {
          "100": "#667085",
          "200": "#5c697d",
          "300": "#5d667b",
        },
        lavender: "#e2ecfe",
        "gray-5": "#dee1e6",
        lightslategray: "#808a9d",
      },
      spacing: {},
      fontFamily: {
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12":
          "Inter",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14":
          "'SF Pro Text'",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "5xs-5": "7.5px",
        "6xs-7": "6.7px",
        "40xl-2": "59.2px",
        "21xl": "40px",
        "13xl": "32px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      mini: "15px",
      lg: "18px",
      "base-6": "15.6px",
      "base-1": "15.1px",
      "mini-3": "14.3px",
      "17xl-4": "36.4px",
      "3xl": "22px",
      "10xl": "29px",
      "lg-9": "18.9px",
      "xs-2": "11.2px",
      smi: "13px",
      "sm-8": "13.8px",
      "sm-6": "13.6px",
      "2xs": "11px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
