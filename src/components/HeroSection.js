import { Button, Typography, Box } from "@mui/material";

// Apply KibokoDAO brand typography and colors
const HeroSection = () => (
  <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#7DC9CF" }}>
    <Typography
      variant="h1"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "extraBold",
        fontSize: "34pt",
        color: "#ED058A",  // Mexican Pink
      }}
    >
      KibokoDAO NFT Minting
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "medium",
        fontSize: "14pt",
        color: "#000",
        mt: 2,
      }}
    >
      Mint your exclusive NFT and celebrate Africa's diversity.
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#ED058A",  // Mexican Pink
        color: "#fff",
        mt: 4,
        fontFamily: "Montserrat, sans-serif",
        ":hover": { backgroundColor: "#FB6269" },  // Pastel Red
      }}
    >
      Connect Wallet
    </Button>
  </Box>
);

export default HeroSection;
