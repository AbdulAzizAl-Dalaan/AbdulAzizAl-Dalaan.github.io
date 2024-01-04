import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import about_img from './images/about.png';
import "./Component.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function About() {
  // Change the breakpoint to a larger value, e.g., '(min-width:800px)' or '(min-width:960px)'
  const matches = useMediaQuery('(min-width:970px)');

  return (
    <div className="Viewpoint" id='About' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={2} sx={{ px: 3, width: '100%', margin: 0 }}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{ my: 2, textAlign: "center", color: "white", fontSize: matches ? 'h4.fontSize' : 'h5.fontSize' }}
            >
              About Me
            </Typography>
            <img src={about_img} alt="AbdulAziz Al-Dalaan" style={{ maxWidth: '100%', height: 'auto', border: '3px solid #fff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ fontSize: matches ? 'h4.fontSize' : 'h5.fontSize', lineHeight: '1.7' }}>
            My name is AbdulAziz Al-Dalaan, but for sort you can call me Aziz. I am a recent graduate from Washington State University with a BSc in Computer Science.
            My hobbies include Gaming on just about all platforms, Daily Running, and Watching Movies/Shows. I am currently looking for a job in the Software 
            Development Field. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
