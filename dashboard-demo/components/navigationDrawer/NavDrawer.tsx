import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import AccountTree from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Box, Toolbar, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavDrawer() {
    const theme = useTheme();
    const router = useRouter()
    router.asPath
    console.log(router.asPath);
    return (
    <div>
      <Toolbar />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          src={"/monsters-inc-logo.png"}
          height={100}
          width={150}
          alt="Monsters inc logo"
        ></img>
      </Box>
      <h1 style={{ paddingLeft: 27, marginTop: 27, fontSize: 20 }}>General</h1>
      <List className={"sidebar-navigation"}>
        <ListItem key={1} disablePadding>
          <Link
            className={
              router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <SatelliteAltIcon />
              </ListItemIcon>
              <ListItemText primary={<>MyH2Oinfo &trade;</>} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={2} disablePadding>
          <Link
            className={
              router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/stations-directory"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText primary={"Directory"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={3} disablePadding>
          <Link
            className={
            router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/trends"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Trends"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={4} disablePadding>
          <Link
            className={
              router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/reports"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <ContentPasteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={5} disablePadding>
          <Link
            className={
              router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/addons"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <DashboardCustomizeOutlinedIcon className={"sidebar-icon"} />
              </ListItemIcon>
              <ListItemText primary={"Addons"} />
            </ListItemButton>
          </Link>
        </ListItem>

        <h1 style={{ paddingLeft: 27, marginTop: 30, fontSize: 20 }}>Admin</h1>

        <ListItem key={6} disablePadding>
          <Link
            className={
              router.asPath === "/stations" ? "sidebar-link-active-" + theme.palette.mode : "sidebar-link"
            }
            href="/users"
            style={{ color: theme.palette.text.primary }}
          >
            <ListItemButton sx={{ paddingLeft: "22px" }}>
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"users"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </div>
    )
};