import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { teal, deepOrange, cyan, orange } from "@mui/material/colors"
import { BorderColor } from "@mui/icons-material"

// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "60px"
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main
            }
          }

          // "& fieldset": {
          //   borderWidth: "1px !important"
          // }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem"
        })
      }
    }
  }
})

export default theme
