"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
          }}
        >
          <Box>
            <Link style={{ display: "flex", alignItems: "center" }} href={"#"}>
              <Image src={logoSrc} alt="Logo" width={60} height={60} />
              <Link
                href="/"
                color="inherit"
                style={{
                  marginLeft: "0.5rem",
                  fontWeight: "600",
                  fontSize: "35px",
                }}
              >
                Nasa API
              </Link>
            </Link>
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
            }}
          >
            <Link color="inherit" href="/about">
              About
            </Link>
            <Link color="inherit" href="/missions">
              Missions
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
