import { useState } from "react"
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
import InputAdornment from "@mui/material/InputAdornment"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"

const Board = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        gap: 2,
        overflow: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{ fontSize: "24px", fontWeight: 700, color: "white" }}
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />

        <Button
          sx={{ color: "white", border: "none", "&:hover": { border: "none" } }}
          variant="outlined"
          startIcon={<LibraryAddIcon />}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer"
                }}
                onClick={() => setSearchValue("")}
              />
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default Board
