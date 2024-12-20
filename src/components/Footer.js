import { Box, Typography } from "@mui/material";

// Apply KibokoDAO brand typography and colors
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <Box sx={{ py: 4, textAlign: "center", backgroundColor: "#ED058A", color: "#fff" }}>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "regular",
          fontSize: "14pt",
        }}
      >
        © {currentYear} KibokoDAO | Celebrating Africa’s Diversity
      </Typography>
    </Box>
  );
};

export default Footer;
