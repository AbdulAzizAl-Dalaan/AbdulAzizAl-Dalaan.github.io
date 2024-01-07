import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import about_img from "./images/about.png";
import "./Component.css";

function About() {
  const matches = useMediaQuery("(min-width:1550px)");
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div
      className="Viewpoint"
      id="About"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Grid container spacing={2} sx={{ px: 3, width: "100%", margin: 0 }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                my: 2,
                textAlign: "center",
                color: "white",
                fontSize: matches ? "h1.fontSize" : "h2.fontSize",
              }}
            >
              About Me
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: "70%", // Adjust the width here
              backgroundColor: "grey.900",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: '10px 5px 5px black'
            }}
          >
            <CardMedia
              component="img"
              image={about_img}
              alt="AbdulAziz Al-Dalaan"
              style={imageStyle}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  fontSize: matches ? "h5.fontSize" : "h6.fontSize",
                  lineHeight: "1.5",
                  color: "white",
                  textAlign: "left",
                }}
              >
                My name is Aziz. I am a recent graduate from Washington State
                University with a BSc in Computer Science. My hobbies include
                Gaming on just about all platforms, Daily Running, and Watching
                Movies/Shows. I am currently looking for a job in the Software
                Development Field.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
