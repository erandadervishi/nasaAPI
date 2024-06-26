"use client";
import { Box, Grid, Typography, Button, Link, Container } from "@mui/material";

const AboutComponent = () => {
  return (
    <Container
      sx={{
        bgcolor: "#fff",
        padding: "4rem 0",
      }}
    >
      <Grid container spacing={7} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            style={{ maxWidth: "100%" }}
            src="/astro.webp"
            alt="Freelancer Working"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontSize: "28px", fontWeight: "bold", mb: 2 }}
          >
            NASA Today
          </Typography>
          <Typography sx={{ fontSize: "19px", fontWeight: "bold", mb: 1 }}>
            For more than 50 years
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            At its 20 centers and facilities across the country – and the only
            National Laboratory in space – NASA studies Earth, including its
            climate, our Sun, and our solar system and beyond. We conduct
            research, testing, and development to advance aeronautics, including
            electric propulsion and supersonic flight. We develop and fund space
            technologies that will enable future exploration and benefit life on
            Earth.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#000",
                background: "transparent",
                borderRadius: "0",
                padding: " 0.5rem 3rem",
                border: "1px solid #000",
                "&:hover": {
                  color: "#000",
                  fontWeight: "600",
                  border: "1px solid #000",
                  background: "transparent",
                  boxShadow: "0",
                },
              }}
            >
              NASA Centers
            </Button>
            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  color: "#000",
                  background: "transparent",
                  borderRadius: "0",
                  padding: " 0.5rem 3rem",
                  border: "1px solid #000",
                  "&:hover": {
                    color: "#000",
                    fontWeight: "600",
                    border: "1px solid #000",
                    background: "transparent",
                    boxShadow: "0",
                  },
                }}
              >
                HomePage
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutComponent;
