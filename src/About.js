import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    // title about
    // about me
    <>
      <Typography variant="h4" sx={{ my: 2, textAlign: "center", color: "white"}}>
        About Me
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          bgcolor: "black",
          height: "100vh",
          width: "50%",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          AbdulAziz Al-Dalaan
        </Typography>
      </Box>
    </>
  );
}

export default About;
