import { Box, Typography, Button, LinearProgress, Card, CardContent, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MintingSection = () => (
  <Box
    sx={{
      py: 8,
      px: 4,
      textAlign: "center",
      background: "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)",
      borderRadius: "12px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Heading */}
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        fontSize: { xs: "18pt", sm: "22pt" },
        color: "#18163C", // Yankees Blue
        mb: 4,
      }}
    >
      Mint Your NFT
    </Typography>

    {/* Description */}
    <Typography
      variant="body1"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "medium",
        fontSize: { xs: "12pt", sm: "14pt" },
        color: "#47217B", // Blue-Violet
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.8",
      }}
    >
      Unlock exclusive benefits with KibokoDAO NFTs! Gain governance rights, revenue sharing, and access to premium perks. Be part of Africa's Web3 revolution today.
    </Typography>

    {/* Minting Progress */}
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "medium",
          fontSize: { xs: "12pt", sm: "14pt" },
          color: "#18163C", // Yankees Blue
        }}
      >
        Minting Progress: <strong>15/20 minted</strong>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={75}
        sx={{
          mt: 2,
          maxWidth: "500px",
          margin: "0 auto",
          height: "8px",
          borderRadius: "4px",
          backgroundColor: "#EDEDED",
          "& .MuiLinearProgress-bar": { backgroundColor: "#47217B" }, // Blue-Violet
        }}
      />
    </Box>

    {/* Mint Button */}
    <Button
      variant="contained"
      sx={{
        mt: 6,
        background: "linear-gradient(90deg, #18163C 0%, #47217B 100%)", // Yankees Blue to Blue-Violet gradient
        color: "#fff",
        padding: "10px 30px",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14pt",
        textTransform: "none",
        borderRadius: "30px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        ":hover": {
          background: "linear-gradient(90deg, #47217B 0%, #18163C 100%)",
        },
        transition: "all 0.3s ease",
      }}
    >
      Mint Your NFT Now
    </Button>

    {/* Benefits Section */}
    <Card
      sx={{
        mt: 8,
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        textAlign: "left",
      }}
    >
      <CardContent sx={{ px: 4, py: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "semi-bold",
            fontSize: "18pt",
            color: "#18163C", // Yankees Blue
            mb: 4,
            textAlign: "center",
          }}
        >
          Why Mint a KibokoDAO NFT?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <CheckCircleIcon sx={{ color: "#47217B", fontSize: "30px" }} /> {/* Blue-Violet */}
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14pt",
                  color: "#555",
                }}
              >
                <strong>Governance Rights:</strong> Shape KibokoDAO’s decisions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <CheckCircleIcon sx={{ color: "#47217B", fontSize: "30px" }} />
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14pt",
                  color: "#555",
                }}
              >
                <strong>Revenue Sharing:</strong> Earn from DAO activities.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <CheckCircleIcon sx={{ color: "#47217B", fontSize: "30px" }} />
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14pt",
                  color: "#555",
                }}
              >
                <strong>Community Perks:</strong> Access exclusive events.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <CheckCircleIcon sx={{ color: "#47217B", fontSize: "30px" }} />
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14pt",
                  color: "#555",
                }}
              >
                <strong>Legacy Ownership:</strong> Celebrate African innovation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

export default MintingSection;
