import ModeSelect from "~/components/ModeSelect"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AppsIcon from "@mui/icons-material/Apps"
import TrelloIcon from "~/assets/trello.svg?react"
import SvgIcon from "@mui/material/SvgIcon"
import Workspaces from "./Menus/Workspaces"
import Recent from "./Menus/Recent"
import Starred from "./Menus/Starred"
import Templates from "./Menus/Templates"
import TextField from "@mui/material/TextField"
import Badge from "@mui/material/Badge"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import Tooltip from "@mui/material/Tooltip"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import Profiles from "./Menus/Profiles"

const Board = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{ fontSize: "24px", fontWeight: 700, color: "primary.main" }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default Board
