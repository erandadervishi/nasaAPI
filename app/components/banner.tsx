"use client";
import { Box, Typography, Button, Container, Link } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "700px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
        backgroundImage: `url("/stars.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Apollo 11 Video Collection
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, fontSize: "20px", marginBottom: "2rem" }}
        >
          Stay up-to-date on the latest news from NASA—from Earth to the Moon,
          the Solar System and beyond.
        </Typography>
        <Link
          href="#api"
          sx={{
            borderRadius: "0",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#fff",
            textDecoration: "0",
            padding: " 0.7rem 3rem",
            border: "1px solid #fff",
            "&:hover": {
              color: "#fff",
              border: "1px solid #fff",
              background: "transparent",
              boxShadow: "0",
            },
          }}
        >
          Start Exploring
        </Link>
      </Container>
    </Box>
  );
};

export default Banner;
