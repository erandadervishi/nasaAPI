"use client";
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../app/store";

const Favorites: React.FC = () => {
  const favoriteVideos = useAppSelector(
    (state) => state.favorites.favoriteVideos
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        Favorite Videos
      </Typography>
      <Grid container spacing={4}>
        {favoriteVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={video.imageUrl}
                alt={video.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description.length > 150
                    ? `${video.description.substring(0, 150)}...`
                    : video.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favorites;
