import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../assets/img/logo-header.png";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [collapseOpen, setCollapseOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setCollapseOpen(!collapseOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open} className="appBar">
        <Toolbar variant="dense" className="toolBar">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon style={{ display: open ? "none" : "block" }} />
          </IconButton>

          <div style={{ position: "relative" }}>
            {open && (
              <React.Fragment>
                <Drawer
                  sx={{
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: drawerWidth,
                      boxSizing: "border-box",
                    },
                  }}
                  variant="persistent"
                  anchor="left"
                  open={open}
                >
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                    <ListItemButton>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                    </Link>
                    <ListItemButton onClick={handleClick}>
                      <ListItemText primary="Master data" />
                      {collapseOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <Link to="/regions" style={{textDecoration:"none", color:"inherit"}}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Regions" />
                        </ListItemButton>
                        </Link>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Countries" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Risk Sources" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Severities" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Sectors and Business Lines" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="CRP's Formulas" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="WACC's Formulas"/>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>
                </Drawer>
              </React.Fragment>
            )}
          </div>
          <IconButton size="small">
            <img src={logo} alt="logo" width={40}></img>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              babylonwacc-sbx
            </span>
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>
              development V 3.0.0
            </span>
          </Typography>
          <div>
            <Typography
              variant="h7"
              fontWeight="bold"
              fontFamily="default"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <span>
                {user.fname} {user.lname}
              </span>
            </Typography>
            <Typography
              fontSize="14px"
              fontFamily="default"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <span>SIGN OUT</span>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
