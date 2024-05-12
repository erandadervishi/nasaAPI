import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { Container, Typography, Paper, Box } from "@mui/material";

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
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          {video.title}
        </Typography>
        <Box
          component="img"
          src={video.imageUrl}
          alt={video.title}
          sx={{ width: "100%", height: "auto", my: 2 }}
        />
        <Typography variant="body1">{video.description}</Typography>
      </Paper>
    </Container>
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

interface VideoProps {
  title: string;
  description: string;
  imageUrl: string;
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