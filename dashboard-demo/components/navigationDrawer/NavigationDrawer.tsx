import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState, useContext } from "react";
import "../navigationDrawer/navigationDrawer.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import NavDrawer from "./NavDrawer";
import Link from "@mui/material/Link";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

export default function NavigationDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          borderRight: "none",
          marginRight: "auto",
          background:"none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            borderRight: 0,
            paddingTop: "39px",
            paddingBottom: "40px",
            flexWrap: "wrap",

            background: `${
              theme.palette.mode === "dark" ? "#121212" : "white"
            }`,
          }}
        >
          <div className={"topbar-search-container"}>
            <form>
              <div style={{ position: "relative" }}>
                <input
                  id="topbar-search"
                  type="search"
                  placeholder="search..."
                ></input>
                <SearchIcon
                  sx={{
                    position: "absolute",
                    right: 0,
                    marginTop: "5%",
                    top: 0,
                    marginRight: 2,
                  }}
                ></SearchIcon>
              </div>
            </form>
          </div>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={"mobile-hamburger"}
            sx={{
              mr: 2,
              display: { sm: "none" },
              marginRight: "auto",
              background: "#e6f7fc",
              borderRadius: "10px",
              color: "#747474",
            }}
          >
            <MenuIcon />
          </IconButton>
          <LogoutIcon
            className={"topbar-icon"}
            fontSize={"large"}
            style={
              theme.palette.mode === "dark"
                ? { background: "rgba(255, 255, 255, 0.08)" }
                : { background: "#E6F7FC", color: "#747474" }
            }
          ></LogoutIcon>
          <IconButton
            onClick={()=>{}}
            className={"topbar-button"}
            sx={{ padding: 0 }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness4Icon
                className={"topbar-icon"}
                fontSize={"large"}
                style={{ background: "rgba(255, 255, 255, 0.08)" }}
              />
            ) : (
              <DarkModeIcon
                className={"topbar-icon"}
                fontSize={"large"}
                style={{ background: "#E6F7FC", color: "#747474" }}
              />
            )}
          </IconButton>
          <SettingsIcon
            className={"topbar-icon"}
            fontSize={"large"}
            style={
              theme.palette.mode === "dark"
                ? { background: "rgba(255, 255, 255, 0.08)" }
                : { background: "#E6F7FC", color: "#747474" }
            }
          ></SettingsIcon>
          <NotificationsNoneOutlinedIcon
            className={"topbar-icon"}
            fontSize={"large"}
            style={
              theme.palette.mode === "dark"
                ? { background: "rgba(255, 255, 255, 0.08)" }
                : { background: "#E6F7FC", color: "#747474" }
            }
          ></NotificationsNoneOutlinedIcon>
          <Link sx={{ height: 35 }}  style={
                    theme.palette.mode === "dark"
                      ? { color: "white" }
                      : { color: "inherit" }
                  } href="/user/profile">
            <AccountCircleOutlinedIcon
              className={"topbar-icon"}
              fontSize={"large"}
              sx={{ marginRight: 0 }}
              style={
                theme.palette.mode === "dark"
                  ? { background: "rgba(255, 255, 255, 0.08)" }
                  : { background: "#E6F7FC", color: "#747474" }
              }
            ></AccountCircleOutlinedIcon>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {<NavDrawer />}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderWidth: 0,
            },
          }}
          open
        >
          {<NavDrawer />}
        </Drawer>
      </Box>
      <Box
        component="main"
        className={"blue-background"}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: `${
            theme.palette.mode === "dark" ? "#121212" : "#E6F7FC"
          }`,
        }}
      >
   
        {props.children}
      </Box>
    </Box>
  );
}
