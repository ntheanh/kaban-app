/* eslint-disable react/prop-types */
import Box from "@mui/material/Box"
import Card from "./Card/Card"
// import TrelloCard from "./Card/Card"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

const ListCards = ({ cards }) => {
  return (
    <SortableContext
      items={cards?.map((c) => c?._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: "0 5px",
          m: "0 5px",
          overflowX: "hidden",
          overflowY: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em"
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555"
          },

          maxHeight: (theme) => `calc(
          ${theme.trelloCustom.boardContentHeight} - 
          ${theme.spacing(4)} -
          ${theme.trelloCustom.columnHeaderHeight} -
          ${theme.trelloCustom.columnFooterHeight}
        )`
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
