import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import h2f_img from './images/h2f.png'
import ext2_img from './images/linux.png'
import nfl_img from './images/nfl.png'
import crap_img from './images/wsu.png'
import "./Component.css"

const projectTitles = [
  "H2F-APP",
  "QuizFeed",
  "EXT2 File System",
  "NFL Prediction Algorithm",
  "Cougar Research Application Portal",
];

const projectImages = [
  h2f_img,
  '',
  ext2_img,
  nfl_img,
  crap_img
]

const projectDescriptions = [
  "Winner of 3rd Place in WSUs EECS Capstone Competition. An application designed for the Army National Guard to help improve the time, accuracy, and effectiveness of their Periodic Health Assessment in the form of a multi-page web application.",
  "QuizFeed is a web application that allows users to create and take quizzes. The application is built using React and Firebase.",
  "Linux EXT2 File System is a C program that allows users to create, read, and write to a virtual file system. The program is built using C and the FUSE library.",
  "NFL-Prediction-Alogrithm is a Python program that uses machine learning to predict the outcome of NFL games. The program uses the scikit-learn library to train and test the model.",
  "",
];

const projectIcons = [
  ["devicon-javascript-plain", "devicon-nodejs-plain", "devicon-express-original", "devicon-mysql-plain", "devicon-azure-plain"],
  ["devicon-react-original", "devicon-nodejs-plain", "devicon-express-original", "devicon-sqlite-plain"],
  ["devicon-c-plain", "devicon-linux-plain"],
  ["devicon-python-plain", "devicon-pandas-original", "devicon-numpy-original"],
  ["devicon-python-plain", "devicon-flask-original", "devicon-html5-plain", "devicon-css3-plain"]
];

const projectLinks = [
  "https://github.com/AbdulAzizAl-Dalaan/H2FSAT_APP",
  "https://github.com/AbdulAzizAl-Dalaan/QuizFeed",
  "https://github.com/AbdulAzizAl-Dalaan/ext2-file-system",
  "https://github.com/AbdulAzizAl-Dalaan/NFL-Prediction-Algorithm",
  "https://github.com/AbdulAzizAl-Dalaan/Cougar-Research-Application-Portal",
];

function Projects() {

  return (
    <div className="Viewpoint" id="Projects">
      <Typography
        variant="h4"
        sx={{ my: 2, textAlign: "center", color: "white" }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          flexWrap: "wrap",
          px: 3,
          pt: 8,
        }}
      >
        {projectTitles.map((item, index) => (
          <Card
            sx={{
              width: { xs: "100%", sm: "30%" },
              margin: 2,
              backgroundColor: "grey.900",
              color: "white",
            }}
          >
            
            <CardMedia
              component="img"
              alt={item}
              height="230"
              image={projectImages[index]}
              // style={{
              //   objectFit: 'contain',
              //   objectPosition: 'center' // optional, adjust as needed
              // }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item}
              </Typography>
              <Typography variant="body2" color="gray">
                {projectDescriptions[index]}
              </Typography>
            </CardContent>
            <Typography marginLeft="4%">
              {projectIcons[index].map((icon, i) => (
                  <i key={i} className={icon} style={{marginRight: '3%', fontSize: 'larger'}}></i>
              ))}
            </Typography>

            <Box marginTop="2%">
              <CardActions>
                <Button size="small" color="primary">
                  <Link
                    href={projectLinks[index]}
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: "white" }}
                  >
                    View Repo
                  </Link>
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
export default Projects;
