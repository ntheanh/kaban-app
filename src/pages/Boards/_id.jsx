import Container from "@mui/material/Container"
import AppBar from "../../components/AppBar"
import BoardBar from "./BoardBar"
import BoardContent from "./BoardContent"
function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </>
  )
}

export default App
