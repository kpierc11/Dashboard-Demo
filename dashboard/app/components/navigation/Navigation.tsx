import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  Box,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";

import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import "../navigation/navigation.css";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

export default function Navigation(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <img
            src="/monsters-inc-logo.png"
            height={100}
            width={150}
            alt="Hydrobioscience logo"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Toolbar>

      <Typography
        variant="h6"
        sx={{ pl: 3.375, mt: 3 }} // 27px = 3.375, margin top = 3
      >
        General
      </Typography>

      {/* General Section */}
      <List className={"sidebar-navigation"}>
        <ListItem disablePadding>
          <MuiLink
            href="/"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <SatelliteAltIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </MuiLink>
        </ListItem>

        <ListItem disablePadding>
          <MuiLink
            href="/about"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Directory" />
            </ListItemButton>
          </MuiLink>
        </ListItem>

        <ListItem disablePadding>
          <MuiLink
            href="/trends"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Trends" />
            </ListItemButton>
          </MuiLink>
        </ListItem>

        <ListItem disablePadding>
          <MuiLink
            href="/reports"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ContentPasteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </MuiLink>
        </ListItem>

        <ListItem disablePadding>
          <MuiLink
            href="/addons"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardCustomizeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Addons" />
            </ListItemButton>
          </MuiLink>
        </ListItem>
      </List>

     
      <Typography
        variant="h5"
        sx={{ pl: 3.375, mt: 3 }} // 27px = 3.375, margin top = 3
      >
        Admin
      </Typography>

      {/* Admin Section */}
      <List className={"sidebar-navigation"}>
        <ListItem disablePadding>
          <MuiLink
            href="/users"
            underline="none"
            color="inherit"
            sx={{ width: "100%" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </MuiLink>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          background: "white",
        }}
      >
        <Toolbar className={"top-toolbar"}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box
          component="main"
          className={"blue-background"}
          sx={{
            flexGrow: 1,
            p: 3,
            background: `${"#E6F7FC"}`,
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
