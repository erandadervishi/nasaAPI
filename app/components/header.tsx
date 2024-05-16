"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "../store";

interface HeaderProps {
  logoSrc: string;
  isDashboard: boolean;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, isDashboard }) => {
  const favoriteCount = useAppSelector(
    (state) => state.favorites.favoriteVideos.length
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar
        position={isDashboard ? "absolute" : "relative"}
        sx={{
          background: isDashboard ? "transparent" : "#1a2e35",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
              color: "white",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image src={logoSrc} alt="Logo" width={60} height={60} />
                <Link
                  href="/"
                  color="#fff"
                  style={{
                    marginLeft: "0.5rem",
                    fontWeight: "600",
                    fontSize: "35px",
                    textDecoration: "none",
                  }}
                >
                  Nasa API
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
                gap: "2rem",
                fontSize: "20px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              <Link color="#fff" href="/about" sx={{ textDecoration: "none" }}>
                About
              </Link>
              <Link
                color="#fff"
                href="/missions"
                sx={{ textDecoration: "none" }}
              >
                Missions
              </Link>
              <IconButton sx={{ color: "#d9130f" }} href="/favorites">
                <Badge badgeContent={favoriteCount} sx={{ color: "#d9130f" }}>
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            sx={{ justifyContent: "flex-end", margin: "0.5rem" }}
          >
            <CloseIcon />
          </IconButton>
          <ListItemButton component="a" href="/about">
            <ListItemText
              primary="About"
              style={{ fontSize: "18px", fontWeight: "800", color: "#000" }}
            />
          </ListItemButton>
          <ListItemButton component="a" href="/missions">
            <ListItemText primary="Missions" />
          </ListItemButton>
          <ListItemButton
            component="a"
            href="/favorites"
            sx={{ gap: "0.5rem" }}
          >
            <Badge badgeContent={favoriteCount} sx={{ color: "#d9130f" }}>
              <FavoriteIcon />
            </Badge>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
