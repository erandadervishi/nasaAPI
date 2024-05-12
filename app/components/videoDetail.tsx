// pages/videos/[id].tsx
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params!;
    const response = await axios.get(
      `https://images-api.nasa.gov/search?nasa_id=${id}`
    );
    const item = response.data.collection.items[0];

    const video = {
      title: item.data[0].title,
      description: item.data[0].description,
      imageUrl: item.links.find((link: any) => link.rel === "preview").href,
    };

    return {
      props: {
        video,
      },
    };
  } catch (error) {
    console.error("Error fetching video data:", error);
    return {
      props: {},
    };
  }
};

export default VideoDetailPage;
