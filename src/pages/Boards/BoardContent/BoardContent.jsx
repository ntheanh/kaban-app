/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import { mapOrder } from "~/utils/sorts"

const BoardContent = ({ board }) => {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id")
  console.log(board._id)
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: "10px 0"
      }}
      Box
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}

export default BoardContent
