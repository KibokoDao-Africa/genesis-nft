import React, { useState } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import Typewriter from "react-typewriter-effect";
import backgroundImage from "../assets/images/downloads/hero-background.jpg";
import { BrowserProvider } from "ethers"; // Use BrowserProvider in v6

const HeroSection = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      // Check if window.ethereum is available (MetaMask or other injected wallets)
      if (window.ethereum) {
        // Use BrowserProvider for MetaMask
        const provider = new BrowserProvider(window.ethereum); // Corrected for v6
        const signer = await provider.getSigner(); // Get signer (connected wallet)

        // Get the connected account address
        const userAccount = await signer.getAddress();
        setAccount(userAccount);

        // Optionally: Get the network details
        const network = await provider.getNetwork();
        console.log("Connected to network:", network);
      } else {
        throw new Error("Please install MetaMask or another Ethereum wallet.");
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
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
      <Box sx={{ position: "relative", zIndex: 2, color: "#fff" }}>
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
        <Paper
          elevation={6}
          sx={{
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
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
                color: "#18163C",
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
            onClick={connectWallet}
          >
            {account ? `Connected: ${account.slice(0, 6)}...` : "Connect Wallet"}
          </Button>
          {error && (
            <Typography sx={{ color: "red", marginTop: "10px" }}>
              Error: {error}
            </Typography>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroSection;
