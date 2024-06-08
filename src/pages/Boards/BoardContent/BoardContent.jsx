/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import { mapOrder } from "~/utils/sorts"
<<<<<<< HEAD
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core"
=======
import { DndContext } from "@dnd-kit/core"
>>>>>>> master
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
// import { arrayMove } from "@dnd-kit/sortable"

const BoardContent = ({ board }) => {
<<<<<<< HEAD
  // BUG Drag Drop
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })
  // const sensor = useSensors(pointerSensor)
  const sensor = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderColumns] = useState([])
=======
  const [orderedColumns, setOrderColumns] = useState([])

>>>>>>> master
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

<<<<<<< HEAD
    if (!over) return
    if (active.id !== over.id) {
      // setOrderColumns((orderedColumns) => {
      //   const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      //   const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      //   return arrayMove(orderedColumns, oldIndex, newIndex)
      // })

      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
      // console.log("dndOrderedColumns:", dndOrderedColumns)
      // console.log("dndOrderedColumnsIds:", dndOrderedColumnsIds)

      setOrderColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensor}>
=======
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
>>>>>>> master
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
