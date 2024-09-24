/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import Column from "./ListColumns/Column/Column"
import Card from "./ListColumns/Column/ListCards/Card/Card"
import { mapOrder } from "~/utils/sorts"
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  closestCorners
} from "@dnd-kit/core"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
import { cloneDeep } from "lodash"

const BoardContent = ({ board }) => {
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

  const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: "ACTIVE_DRAG_ITEM_COLUMN",
    CARD: "ACTIVE_DRAG_ITEM_CARD"
  }
  // const sensor = useSensors(pointerSensor)
  const sensor = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColDraggingCard, setOldColDraggingCard] = useState(null)

  useEffect(() => {
    // const orderedColumns = mapOrder(
    //   board?.columns,
    //   board?.columnOrderIds,
    //   "_id"
    // )

    setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"))
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column?.cards?.map((card) => card?._id)?.includes(cardId)
    )
  }

  const moveCardBetweenDifferentColumns = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDraggingCardData
  ) => {
    setOrderColumns((prevColumns) => {
      const overCardIndex = overColumn.cards.findIndex(
        (card) => card._id === overCardId
      )
      let newCardIndex
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn?.cards?.length + 1

      const nextColumn = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumn.find(
        (column) => column._id === activeColumn._id
      )
      const nextOverColumn = nextColumn.find(
        (column) => column._id === overColumn._id
      )

      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        )
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
          (card) => card._id
        )
      }

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(
          (card) => card._id !== activeDraggingCardId
        )

        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id
        }

        nextOverColumn.cards = nextOverColumn.cards.toSpliced(
          newCardIndex,
          0,
          rebuild_activeDraggingCardData
        )
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
          (card) => card._id
        )
      }
      return nextColumn
    })
  }

  const handleDragStart = (event) => {
    // console.log("handleDragStart:", event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)

    if (event?.active?.data?.current?.columnId) {
      setOldColDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  const handleDragOver = (event) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    // console.log("handleDragOver", event)
    const { active, over } = event

    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active

    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      //Keo tha card tu column nay sang column khac
      moveCardBetweenDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData
      )
    }
  }

  const handleDragEnd = (event) => {
    // console.log("handleDragEnd:", event)
    const { active, over } = event
    if (!active || !over) return

    // Xu ly keo tha card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active

      const { id: overCardId } = over

      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      // console.log("oldColumnDraggingCard", oldColDraggingCard)
      // console.log("overColumn", overColumn)
      if (oldColDraggingCard._id !== overColumn._id) {
        //Keo tha card tu column nay sang column khac
        moveCardBetweenDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardData
        )
      } else {
        //Keo tha card trong cung mot column

        //Lay vi tri cu tu active
        const oldCardIndex = oldColDraggingCard?.cards?.findIndex(
          (c) => c._id === activeDragItemId
        )

        //Lay vi tri moi tu over
        const newCardIndex = overColumn?.cards?.findIndex(
          (c) => c._id === overCardId
        )

        const dndOrderedCards = arrayMove(
          oldColDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        )
        setOrderColumns((prevColumns) => {
          // Clone OrderedColumnsState cu ra mot cai moi de xu ly data roi return - cap nhat lai OrderedColumnsState moi
          const nextColumns = cloneDeep(prevColumns)

          //Tim column can cap nhat
          const targetColumn = nextColumns.find(
            (col) => col._id === overColumn._id
          )
          //Cap nhat Card va CardOrderIds cua column can cap nhat
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id)

          return nextColumns
        })
      }
    }

    // Xu ly keo tha column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        //Lay vi tri cu tu active
        const oldColumnIndex = orderedColumns.findIndex(
          (c) => c._id === active.id
        )

        //Lay vi tri moi tu over
        const newColumnIndex = orderedColumns.findIndex(
          (c) => c._id === over.id
        )

        const dndOrderedColumns = arrayMove(
          orderedColumns,
          oldColumnIndex,
          newColumnIndex
        )

        setOrderColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColDraggingCard(null)
  }

  const DropAnimation = {
    duration: 400,
    easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)"
  }
  return (
    <DndContext
      sensors={sensor}

      

      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
    >
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
      <DragOverlay dropAnimation={DropAnimation}>
        {!activeDragItemType && null}
        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
          <Column column={activeDragItemData} />
        )}
        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
          <Card card={activeDragItemData} />
        )}
      </DragOverlay>
    </DndContext>
  )
}

export default BoardContent
