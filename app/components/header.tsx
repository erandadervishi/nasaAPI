"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import Image from "next/image";

interface HeaderProps {
  logoSrc: string;
  isDashboard: boolean;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  isDashboard,
}: HeaderProps) => {
  return (
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
              display: "flex",
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
            <Link color="#fff" href="/missions" sx={{ textDecoration: "none" }}>
              Missions
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
