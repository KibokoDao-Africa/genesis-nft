import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import Typewriter from "react-typewriter-effect";
import backgroundImage from "../assets/images/downloads/hero-background.jpg";
import nftImage1 from "../assets/images/niger/Niger.png";
import nftImage2 from "../assets/images/kenya/kenya.png";
import nftImage4 from "../assets/images/ethiopia/Ethiopia.png";
import nftImage3 from "../assets/images/nigeria/Nigeria.png";
import nftImage5 from "../assets/images/sierra/Sierra.png";
import nftImage6 from "../assets/images/ghana/Ghana.png";
import nftImage7 from "../assets/images/uganda/Uganda.png";
import nftImage8 from "../assets/images/rwanda/Rwanda.png";
import nftImage9 from "../assets/images/south/south africa.png";
import nftImage10 from "../assets/images/zambia/zambia.png";
import nftImage11 from "../assets/images/zimbabwe/zimbabwe.png";
import nftImage12 from "../assets/images/angola/angola.png";
import { BrowserProvider } from "ethers";

const HeroSection = () => {
  const [account, setAccount] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nftImages = [nftImage1, nftImage2, nftImage3, nftImage4,nftImage5,
    nftImage6,nftImage7,nftImage8, nftImage9, nftImage10, nftImage11, nftImage12];

  // Image shuffling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % nftImages.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [nftImages.length]);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAccount = await signer.getAddress();
        setAccount(userAccount);
        console.log("Connected to network:", await provider.getNetwork());
      } else {
        throw new Error("Please install MetaMask or another Ethereum wallet.");
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Connect Wallet Button */}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ED058A",
            color: "#fff",
            textTransform: "none",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12pt",
            borderRadius: "30px",
            padding: "8px 16px",
            ":hover": { backgroundColor: "#FB6269" },
          }}
          onClick={connectWallet}
        >
          {account ? `Connected: ${account.slice(0, 6)}...` : "Connect Wallet"}
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ position: "relative", zIndex: 2, color: "#fff", maxWidth: "600px" }}>
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
        <Box
          sx={{
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
          <Typewriter
            textStyle={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              fontSize: "16pt",
              color: "#fff",
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
      </Box>

      {/* NFT Image Shuffling */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src={nftImages[currentImage]}
          alt="NFT"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
