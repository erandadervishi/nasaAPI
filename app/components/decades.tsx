"use client";
import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DecadesOfDiscovery: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        p: "4rem",
        mt: "",
        backgroundColor: "#ddd",
      }}
    >
      <Container>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ margin: "20px 0" }}>
              Decades of Discovery
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              NASA's first high profile program was Project Mercury, an effort
              to learn if humans could survive in space.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              NASA is responsible for unique scientific and technological
              achievements in human spaceflight, aeronautics, space science, and
              space applications that have had widespread impacts on our nation
              and the world. When NASA opened for business on October 1, 1958,
              it accelerated the work already started on human and robotic
              spaceflight.
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                textTransform: "none",
                color: "#000",
                border: "2px solid #000",
                fontWeight: "600",
              }}
            >
              Learn About Project Mercury
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              sx={{
                height: 240,
                width: "100%",
                objectFit: "cover",
                borderRadius: "4px",
                boxShadow: 3,
              }}
              alt="Flight Director Chris Kraft at his console at the Mercury Control Center"
              src="decades.webp"
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Flight Director Chris Kraft at his console at the Mercury Control
              Center NASA
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DecadesOfDiscovery;
