import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import logo from "../images/almabetter_logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // function for those clickable elements that takes us to homepage
  const reset = () => {
    window.location.replace("/");
  };
  // the drawer that pops up from left in small screen devices
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <NavLink to="/">
        <img
          src={logo}
          onClick={reset}
          className="drawerlogo"
          alt="AlmaBetter-logo"
        />
      </NavLink>
      <Divider />
      <div className="list-container">
        <NavLink to="/" onClick={reset} className="list-btn">
          Resume Templates
        </NavLink>
        <NavLink to="/my_resumes" className="list-btn">
          My Resumes
        </NavLink>
        <NavLink to="/about_us" className="list-btn">
          About Us
        </NavLink>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        // navbar blur effect
        color="transparent"
        sx={{ backdropFilter: "blur(12px)" }}
      >
        <div className="toolbar-box">
          <Toolbar className="toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* navbar logo */}
            <NavLink to="/">
              <img
                src={logo}
                onClick={reset}
                className="mainlogo"
                alt="AlmaBetter-logo"
              />
            </NavLink>
          </Toolbar>
          <Box
            className="box"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {/* navbar links */}
            <div className="navbar-btns">
              <NavLink to="/" onClick={reset} className="btn">
                Resume Templates
              </NavLink>
              <NavLink to="/my_resumes" className="btn">
                My Resumes
              </NavLink>
              <NavLink to="/about_us" className="btn">
                About Us
              </NavLink>
            </div>
          </Box>
        </div>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
            },
            // blur in drawer's background
            backdropFilter: "blur(8px)",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
