"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppDispatch, useAppSelector } from "../store";
import { toggleFavorite } from "../store/wishList";
import { SelectChangeEvent } from "@mui/material/Select";

interface VideoItem {
  nasaId: string;
  title: string;
  description: string;
  imageUrl: string;
  collectionUrl: string;
  keywords: string[];
}

const Apollo11Videos: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(9);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const favoriteVideos = useAppSelector(
    (state) => state.favorites.favoriteVideos
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://images-api.nasa.gov/search?q=apollo%2011"
        );
        const items = response.data.collection.items;

        const videosWithKeywords: VideoItem[] = items.map((item: any) => ({
          nasaId: item.data[0].nasa_id,
          title: item.data[0].title,
          description: item.data[0].description,
          imageUrl: item.links
            ? item.links.find((link: any) => link.render === "image").href
            : "",
          collectionUrl: item.href,
          keywords: item.data[0].keywords,
        }));

        const uniqueKeywords = Array.from(
          new Set(videosWithKeywords.flatMap((video) => video.keywords))
        );

        setVideos(videosWithKeywords);
        setKeywords(uniqueKeywords);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleKeywordChange = (event: SelectChangeEvent) => {
    setSelectedKeyword(event.target.value as string);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortOrder(event.target.value as string);
  };

  const sortedAndFilteredVideos = useMemo(() => {
    const filteredValues = videos.filter(
      (video) => !selectedKeyword || video.keywords.includes(selectedKeyword)
    );

    if (sortOrder) {
      return filteredValues
        .sort((a, b) => {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        })
        .slice(0, displayCount);
    }

    return filteredValues.slice(0, displayCount);
  }, [selectedKeyword, sortOrder, displayCount, videos]);

  const handleLoadMore = () => {
    if (sortedAndFilteredVideos.length < videos.length) {
      setDisplayCount((prevCount) => prevCount + 9);
    } else {
      setHasMore(false);
    }
  };

  const handleToggleFavorite = (video: VideoItem) => {
    dispatch(toggleFavorite(video));
  };

  const isFavorite = (nasaId: string) => {
    return favoriteVideos.some((video) => video.nasaId === nasaId);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <FormControl fullWidth sx={{ width: "50%" }}>
          <InputLabel id="keyword-label">Filter by Keyword</InputLabel>
          <Select
            labelId="keyword-label"
            value={selectedKeyword}
            label="Filter by Keyword"
            onChange={handleKeywordChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {keywords.map((keyword, index) => (
              <MenuItem key={index} value={keyword}>
                {keyword}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ width: "50%" }}>
          <InputLabel id="sort-label">Sort Videos</InputLabel>
          <Select
            labelId="sort-label"
            value={sortOrder}
            label="Sort Videos"
            onChange={handleSortChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="asc">A-Z</MenuItem>
            <MenuItem value="desc">Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {loading ? (
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Loading data...
        </Typography>
      ) : (
        <Grid container spacing={4} id="api">
          {sortedAndFilteredVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={video.imageUrl}
                  alt={video.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Link
                    href={`/videos/${encodeURIComponent(video.nasaId)}`}
                    passHref
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {video.title}
                    </Typography>
                  </Link>
                  <Link
                    href={`/videos/${encodeURIComponent(video.nasaId)}`}
                    passHref
                  >
                    <Typography variant="body2" color="text.secondary">
                      {video.description.length > 150
                        ? `${video.description.substring(0, 150)}...`
                        : video.description}
                    </Typography>
                  </Link>
                </CardContent>
                <CardActions>
                  <IconButton
                    onClick={() => handleToggleFavorite(video)}
                    sx={{ color: "#d9130f" }}
                  >
                    {isFavorite(video.nasaId) ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                  <Link
                    href={`/videos/${encodeURIComponent(video.nasaId)}`}
                    passHref
                  >
                    <Button
                      size="medium"
                      component="a"
                      sx={{ color: "#000", fontWeight: "600" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {hasMore && sortedAndFilteredVideos.length < videos.length && (
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={handleLoadMore}
            variant="contained"
            sx={{
              marginTop: "2rem",
              color: "#000",
              background: "#fff",
              padding: " 0.7rem 4rem",
              border: "1px solid #000",
              fontWeight: "600",
              boxShadow: "0",

              "&:hover": {
                color: "#000",
                fontWeight: "600",
                border: "1px solid transparent",
                background:
                  "radial-gradient(circle, rgba(246,99,7,0.5495448179271709) 20%, rgba(246,99,7,0.8072478991596639) 35%, rgba(252,250,248,0.7232142857142857) 45%, rgba(7,21,90,0.8184523809523809) 98%)",
                boxShadow: "0",
              },
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Apollo11Videos;
