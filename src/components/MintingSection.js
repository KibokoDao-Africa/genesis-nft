import { Box, Typography, Button, Select, MenuItem, LinearProgress } from "@mui/material";

// Apply KibokoDAO brand typography and colors
const MintingSection = () => (
  <Box sx={{ py: 6, px: 4, textAlign: "center" }}>
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        fontSize: "22pt",
        color: "#FB6269",  // Pastel Red
      }}
    >
      Mint Your NFT
    </Typography>
    <Select defaultValue="Kenya" sx={{ mt: 4, width: "50%" }}>
      <MenuItem value="Kenya">Kenya Collection</MenuItem>
      <MenuItem value="Nigeria">Nigeria Collection</MenuItem>
      {/* Add more collections */}
    </Select>
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "medium",
        fontSize: "14pt",
        mt: 2,
        color: "#000",
      }}
    >
      Minting Progress: 15/20 minted
    </Typography>
    <LinearProgress variant="determinate" value={75} sx={{ mt: 2 }} />
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
      Mint NFT
    </Button>
  </Box>
);

export default MintingSection;
