import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    // title about
    // about me
    <>
      <Typography
        variant="h4"
        sx={{ my: 2, textAlign: "center", color: "white" }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          flexWrap: "wrap",
          px: 3,
        }}
      >
        <Typography>
          My name is AbdulAziz Al-Dalaan, but for sort you can call me Aziz. I am a recent gradutate from Washington State University with a B.S in Computer Science
        </Typography>
      </Box>
    
    </>
  );
}

export default About;
