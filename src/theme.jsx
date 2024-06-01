import { experimental_extendTheme as extendTheme } from "@mui/material/styles"

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT} )`
const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "50px"

// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     scrollbarWidth: "thin",
    //     "*::-webkit-scrollbar": {
    //       width: "0.4em"
    //     },
    //     "*::-webkit-scrollbar-track": {
    //       background: "#f1f1f1"
    //     },
    //     "*::-webkit-scrollbar-thumb": {
    //       backgroundColor: "#888"
    //     },
    //     "*::-webkit-scrollbar-thumb:hover": {
    //       background: "#555"
    //     },
    //   }
    // },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({
          fontSize: "0.875rem",
          "& fieldset": { borderWidth: "0.5px !important" },
          "&:hover fieldset": { borderWidth: "1px !important" },
          "&.Mui-focused fieldset": { borderWidth: "1px !important" },

        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {

        root: ({

          fontSize: "0.875rem"
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({
          "&.MuiTypography-body1": {
            fontSize: "0.875rem"
          }

        })
      }
    },
  }


})

export default theme
