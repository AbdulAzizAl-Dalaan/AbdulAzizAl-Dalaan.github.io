import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import "./Component.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const myContactIcons = [faXTwitter, faLinkedinIn, faGithub, faEnvelope];
const myContactLinks = [
  "https://twitter.com/aziz_aldalaan",
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: matches ? "h2.fontSize" : "h3.fontSize",
              textAlign: "center",
            }}
          >
            {myContactIcons.map((myicon, index) => (
              <Link
                href={myContactLinks[index]}
                color={"inherit"}
                target="_blank"
                rel="noreferrer"
                sx={{ pl: 7 }}
              >
                <div className="icon-container">
                  <FontAwesomeIcon icon={myicon} />
                </div>
              </Link>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
