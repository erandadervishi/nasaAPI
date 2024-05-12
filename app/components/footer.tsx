"use client";
import {
  Grid,
  Typography,
  Link,
  Box,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

interface HeaderProps {
  logoSrc: string;
}

const Footer: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#153448",
        color: "white",
        width: "100%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingY: "2rem",
          paddingX: "3rem",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Image alt="Nasa Logo" src={logoSrc} width={50} height={50} />
          <Typography variant="h4">Nasa API</Typography>
        </Box>
        <Image alt="Nasa Logo" src="/spaceship.png" width={100} height={100} />
      </Box>
      <Grid container spacing={6} padding={4}>
        <Grid item xs={12} md={3} paddingLeft={10}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
            The National Aeronautics and Space Administration
          </Typography>
          <Typography variant="body1">
            NASA explores the unknown in air and space, innovates for the
            benefit of humanity, and inspires the world through discovery.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Quick Links
          </Typography>
          <Stack direction="column" spacing={1}>
            <Link href="#" color="inherit">
              Home
            </Link>
            <Link href="/about" color="inherit">
              About NASA
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Learn More
          </Typography>
          <Stack direction="column" spacing={1}>
            <Link href="#" color="inherit">
              Technology
            </Link>
            <Link href="/missions" color="inherit">
              Missions
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6">Follow NASA</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton color="inherit">
              <FacebookIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color="inherit">
              <XIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color="inherit">
              <YouTubeIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "2px solid #ddd",
          marginTop: "2rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © 2024 NASA - All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
