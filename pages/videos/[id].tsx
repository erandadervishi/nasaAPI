"use client";
import { GetServerSideProps, NextPage } from "next";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Link,
  Button,
} from "@mui/material";

interface VideoProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface VideoDetailPageProps {
  video: VideoProps;
}

const VideoDetailPage: NextPage<VideoDetailPageProps> = ({ video }) => {
  if (!video) {
    return (
      <Typography variant="h6" textAlign="center">
        Video not found.
      </Typography>
    );
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ marginY: "2rem" }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ margin: "auto 0" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: "600", marginBottom: "2rem" }}
              >
                {video.title}
              </Typography>
              <Typography variant="body1">{video.description}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={video.imageUrl}
                alt={video.title}
                sx={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Paper>
        <Link href="/">
          <Button
            variant="contained"
            sx={{
              color: "#000",
              background: "transparent",
              borderRadius: "0",
              margin: "2rem auto",
              contentAlign: "center",
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
      </Container>
    </>
  );
};

interface Link {
  href: string;
  rel: string;
  render?: string;
}

interface ItemData {
  center: string;
  title: string;
  keywords: string[];
  nasa_id: string;
  date_created: string;
  media_type: string;
  description: string;
}

interface Item {
  href: string;
  data: ItemData[];
  links: Link[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  if (typeof id !== "string") {
    return { notFound: true };
  }

  const decodedId = decodeURIComponent(id);

  try {
    const response = await fetch(
      `https://images-api.nasa.gov/search?nasa_id=${decodedId}`
    );
    const data = await response.json();

    if (!data.collection.items.length) {
      console.log("No data found for:", decodedId);
      return { notFound: true };
    }

    const item: Item = data.collection.items[0];
    const video: VideoProps = {
      title: item.data[0].title,
      description: item.data[0].description,
      imageUrl:
        item.links.find((link: Link) => link.rel === "preview")?.href ?? "",
    };

    return { props: { video } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};

export default VideoDetailPage;
