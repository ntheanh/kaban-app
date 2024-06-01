import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import FilterListIcon from "@mui/icons-material/FilterList"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import TableViewIcon from "@mui/icons-material/TableView"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
// import PersonAddIcon from "@mui/icons-material/PersonAdd"
import Tooltip from "@mui/material/Tooltip"

// import Button from "@mui/material/Button"

const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  px: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white"
  },
  "&:hover": {
    bgcolor: "primary.50"
  }
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<DashboardIcon />}
          label="Project management"
        />

        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<VpnLockIcon />}
          label="Public/Private"
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<LeaderboardIcon />}
          label="Board"
        />
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<TableViewIcon />}
          label="Table"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          clickable
          icon={<FilterListIcon />}
          label="Filter"
        />
        <AvatarGroup
          max={5}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              // border: "none"
              cursor: "pointer"
            }
          }}
        >
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>{" "}
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>{" "}
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>{" "}
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>{" "}
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
