"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface MissionItem {
  title: string;
  description: string;
  imageUrl: string;
  readMoreUrl: string;
}

interface MissionsProps {
  missions: MissionItem[];
}

const Missions: React.FC<MissionsProps> = ({ missions }) => {
  return (
    <Container>
      <Typography
        variant="h5"
        component="h2"
        sx={{ marginY: "1rem", fontWeight: "600" }}
      >
        Future Missions :
      </Typography>
      <Grid container spacing={4}>
        {missions.map((mission, index) => (
          <Grid item xs={12} md={12} key={index} sx={{ marginY: "2rem" }}>
            <Card
              sx={{ display: "flex", flexDirection: "row", height: "100%" }}
            >
              <CardMedia
                component="img"
                image={mission.imageUrl}
                alt={mission.title}
                sx={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  margin: "16px",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "#000", fontWeight: "bold" }}
                >
                  {mission.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mission.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: "center",
                  marginBottom: 2,
                  color: "#000",
                }}
                href={mission.readMoreUrl}
              ></Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Missions;
