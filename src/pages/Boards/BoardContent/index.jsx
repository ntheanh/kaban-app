import { Box } from "@mui/material"

const COLUMN_HEADER_HEIGHT = "50px"
const COLUMN_FOOTER_HEIGHT = "50px"

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          borderRadius: "6px",
          ml: 2
        }}
      >
        <Box
          sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          Header
        </Box>

        <Box>Content</Box>

        <Box
          sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          Footer
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
