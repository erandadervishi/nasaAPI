"use client";
import { GetServerSideProps, NextPage } from "next";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

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
      <Header logoSrc="../nasa-logo.svg" isDashboard={false} />
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
      </Container>
      <Footer logoSrc="../nasa-logo.svg" />
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
  const id = context.params?.id; // Use optional chaining in case params is undefined
  if (typeof id !== "string") {
    // Check if id is a string
    return { notFound: true }; // Return notFound if id is not a single string
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

    const item: Item = data.collection.items[0]; // Assuming data is fetched as before
    const video: VideoProps = {
      title: item.data[0].title,
      description: item.data[0].description,
      imageUrl:
        item.links.find((link: Link) => link.rel === "preview")?.href ?? "", // Use optional chaining and nullish coalescing
    };

    return { props: { video } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
};

export default VideoDetailPage;
