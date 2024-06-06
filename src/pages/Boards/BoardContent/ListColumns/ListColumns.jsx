/* eslint-disable react/prop-types */

import Box from "@mui/material/Box"
import Column from "./Columns/Column"
import Button from "@mui/material/Button"
import NoteAddIcon from "@mui/icons-material/NoteAdd"
import {
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable"

function ListColumns({ columns }) {
  return (
    <SortableContext
      items={columns?.map((c) => c?._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em"
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            ml: 2
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555"
          }
        }}
      >
        {columns.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            bgcolor: "#ffffff3d",
            height: "fit-content",
            mx: 2,
            borderRadius: "6px"
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: "white",
              justifyContent: "flex-start",
              pl: 2,
              py: 1,
              width: "100% "
            }}
          >
            Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
