import { Button, Typography, Box, Paper } from "@mui/material";
import Typewriter from "react-typewriter-effect";
import backgroundImage from "../assets/images/downloads/hero-background.jpg";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      height: "60vh", // Adjust height as needed
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: "fixed", // Parallax effect
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay for readability */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        zIndex: 1,
      }}
    />

    {/* Content */}
    <Box sx={{ position: "relative", zIndex: 2, color: "#fff" }}>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "extraBold",
          fontSize: "28pt",
          mb: 3,
        }}
      >
        KibokoDAO NFT Minting
      </Typography>

      {/* Card with Typewriter Text */}
      <Paper
        elevation={6}
        sx={{
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
          maxWidth: "600px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <Box>
          <Typewriter
            textStyle={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              fontSize: "16pt",
              color: "#18163C", // Yankees Blue
            }}
            startDelay={500}
            cursorColor="#ED058A"
            multiText={[
              "Mint your exclusive NFT and celebrate Africa's diversity.",
              "Join the future of Web3 in Africa!",
              "Be part of the KibokoDAO community today!",
            ]}
            multiTextDelay={2000}
            typeSpeed={50}
            deleteSpeed={30}
            loop={true}
          />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ED058A",
            color: "#fff",
            mt: 3,
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14pt",
            padding: "8px 20px",
            textTransform: "none",
            borderRadius: "30px",
            ":hover": { backgroundColor: "#FB6269" },
            transition: "all 0.3s ease",
          }}
        >
          Connect Wallet
        </Button>
      </Paper>
    </Box>
  </Box>
);

export default HeroSection;
