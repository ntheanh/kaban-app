import Button from "@mui/material/Button"
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import ThreeDRotation from "@mui/icons-material/ThreeDRotation"
import Typography from "@mui/material/Typography"

function App() {
  return (
    <>
      <div>Nguyen the anh</div>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="subtitle1" color="text.secondary">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
