import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import "./Component.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const myContactIcons = [ faLinkedinIn, faGithub, faEnvelope];
const myContactLinks = [
  "https://www.linkedin.com/in/abdulaziz-al-dalaan/",
  "https://github.com/AbdulAzizAl-Dalaan",
  "mailto:abdul.aldalaan@gmail.com",
];

function Contact() {
  const matches = useMediaQuery("(min-width:970px)");

  return (
    <div
      className="Viewpoint"
      id="Contact"
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
              Contact
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            {myContactIcons.map((myicon, index) => (
              <Link
                key={index}
                href={myContactLinks[index]}
                color={"inherit"}
                target="_blank"
                rel="noreferrer"
                sx={{ px: 2, fontSize: 50 }}
              >
                <div className="icon-container">
                  <FontAwesomeIcon icon={myicon} />
                </div>
              </Link>
            ))}
          </Box>
          <Box sx={{ mt: 3 }}>
            <Link
              href="https://abdulazizal-dalaan.github.io/AbdulAziz-Resume.pdf"
              color={"inherit"}
              target="_blank"
              rel="noreferrer"
              sx={{ fontSize: 25}}
            >
                <div className="icon-container" style={{ textDecoration: 'underline'}}>
                  View Resume
                </div>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
