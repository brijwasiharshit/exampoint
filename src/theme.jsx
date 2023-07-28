import { createTheme } from "@mui/material";

  const mode = "light";
  const themeColor = "primary";

  const colors = {
    main: {
      primary: "#696CFF",
      grey: "#8592A3",
      success: "#71DD37",
      error: "#FF3E1D",
      warning: "#FFAB00",
      info: "#03C3EC",
    },
    light: {
      primary: "#8082FF",
      grey: "#97A2B1",
      success: "#86E255",
      error: "#FF5B3F",
      warning: "#FFB826",
      info: "#29CCEF",
    },
    dark: {
      primary: "#6062E8",
      grey: "#798594",
      success: "#67C932",
      error: "#E8381A",
      warning: "#E89C00",
      info: "#03B1D7",
    },
  };
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Public Sans"',
        "san-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    spacing: (factor) => `${0.25 * factor}rem`,
    shape: {
      borderRadius: 6,
    },
    palette: {
      mode,
      shape: {
        borderRadius: "6px",
      },
      customColors: {
        dark: "219, 219, 235",
        light: "55, 71, 92",
      },
      primary: {
        main: colors.main[themeColor],
        light: colors.light[themeColor],
        dark: colors.dark[themeColor],
        contrastText: "#fff",
      },
      ...(mode === "light"
        ? {
            background: {
              paper: "#ffffff",
              default: "#f5f5f9",
            },
            text: {
              primary: "rgba(55, 71, 92, 0.87)",
              secondary: "rgba(55, 71, 92, 0.6)",
            },
          }
        : {
            background: {
              paper: "#2b2c40",
              default: "#232333",
            },
            text: {
              primary: "rgba(219, 219, 235, 0.87)",
              secondary: "rgba(219, 219, 235, 0.6)",
            },
          }),
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiCardHeader:{
        styleOverrides: {
          root: {
            padding: `8px 16px`,
          }
        }
      },
      MuiCard: {
        defaultProps: {
          elevation: 6,
        },
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          sizeSmall: {
            height: 24,
          },
          root: {
            height: 24,
            "&.MuiChip-rounded": {
              borderRadius: "4px",
            },
          },
        },
      },
      MuiDataGrid: {
        defaultProps: {},
        styleOverrides: {
          columnHeaders: {
            borderTop: "1px solid rgba(50, 71, 92, 0.12)",
            borderRadius: 0,
          },
          root: {
            border: 0,
            borderRadius: 0,
          },
        },
      },
    },
  });

  export default theme;