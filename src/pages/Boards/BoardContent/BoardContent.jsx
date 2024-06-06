/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import { mapOrder } from "~/utils/sorts"
import { DndContext } from "@dnd-kit/core"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
// import { arrayMove } from "@dnd-kit/sortable"

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderColumns] = useState([])

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    )

    setOrderColumns(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    console.log("handleDragEnd:", event)
    const { active, over } = event

    if (active.id !== over.id) {
      setOrderColumns((orderedColumns) => {
        const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
        const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
        return arrayMove(orderedColumns, oldIndex, newIndex)
      })
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
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
    </DndContext>
  )
}

export default BoardContent
