import React, { useState } from "react";
import { Box, Grid, Typography, MenuItem, Select } from "@mui/material";

// Pre-import images for each collection
const nftCollections = {
  kenya: [
    require("../assets/images/kenya/kenya.png"),
    require("../assets/images/kenya/kenya1.png"),
    require("../assets/images/kenya/kenya2.png"),
    require("../assets/images/kenya/kenya3.png"),
    require("../assets/images/kenya/kenya4.png"),
    require("../assets/images/kenya/kenya5.png"),
    require("../assets/images/kenya/kenya6.png"),
    require("../assets/images/kenya/kenya7.png"),
    require("../assets/images/kenya/kenya8.png"),
  ],
  nigeria: [
    require("../assets/images/nigeria/Nigeria.png"),
    require("../assets/images/nigeria/Nigeria1.png"),
    require("../assets/images/nigeria/Nigeria2.png"),
    require("../assets/images/nigeria/Nigeria3.png"),
    require("../assets/images/nigeria/Nigeria4.png"),
    require("../assets/images/nigeria/Nigeria5.png"),
    require("../assets/images/nigeria/Nigeria6.png"),
    require("../assets/images/nigeria/Nigeria7.png"),
    require("../assets/images/nigeria/Nigeria8.png"),
  ],
  ethiopia: [
    require("../assets/images/ethiopia/Ethiopia.png"),
    require("../assets/images/ethiopia/Ethiopia1.png"),
    require("../assets/images/ethiopia/Ethiopia2.png"),
    require("../assets/images/ethiopia/Ethiopia3.png"),
    require("../assets/images/ethiopia/Ethiopia4.png"),
    require("../assets/images/ethiopia/Ethiopia5.png"),
    require("../assets/images/ethiopia/Ethiopia6.png"),
    require("../assets/images/ethiopia/Ethiopia7.png"),
    require("../assets/images/ethiopia/Ethiopia8.png"),
  ],
  // Add other countries (rwanda, sierra, ghana, etc.) following the same structure
};

const NFTGallery = () => {
  const [selectedCountry, setSelectedCountry] = useState("kenya");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const images = nftCollections[selectedCountry] || [];

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4, color: "#18163C" }}>
        {selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1)} NFT Collection
      </Typography>

      {/* Country Selector */}
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        sx={{
          mb: 4,
          width: "50%",
          backgroundColor: "#7DC9CF",
          color: "#18163C",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <MenuItem value="kenya">Kenya</MenuItem>
        <MenuItem value="nigeria">Nigeria</MenuItem>
        <MenuItem value="ethiopia">Ethiopia</MenuItem>
        {/* Add other countries */}
      </Select>

      {/* Image Grid */}
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              component="img"
              src={src}
              alt={`${selectedCountry} NFT ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NFTGallery;
