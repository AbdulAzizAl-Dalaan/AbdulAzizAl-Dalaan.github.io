import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const projectTitles = [
  "H2F-APP",
  "QuizFeed",
  "Linux EXT2 File System",
  "NFL-Prediction-Alogrithm",
  "ddd",
];
const projectDescriptions = [
  "H2F-APP is ahem. The applicadddddddddddddddd  ddddddddd new water fountains to the database. The application is built using React Native and Firebase.",
  "QuizFeed is a web application that allows users to create and take quizzes. The application is built using React and Firebase.",
  "Linux EXT2 File System is a C program that allows users to create, read, and write to a virtual file system. The program is built using C and the FUSE library.",
  "NFL-Prediction-Alogrithm is a Python program that uses machine learning to predict the outcome of NFL games. The program uses the scikit-learn library to train and test the model.",
  "",
];
const projectLinks = [
  "https://github.com/AbdulAzizAl-Dalaan/H2FSAT_APP",
  "https://github.com/AbdulAzizAl-Dalaan/QuizFeed",
  "https://github.com/AbdulAzizAl-Dalaan/ext2-file-system",
  "https://github.com/AbdulAzizAl-Dalaan/NFL-Prediction-Algorithm",
];

function Projects() {
  return (
    <>
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
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item}
              </Typography>
              <Typography variant="body2" color="gray">
                {projectDescriptions[index]}
              </Typography>
            </CardContent>
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
          </Card>
        ))}
      </Box>
    </>
  );
}
export default Projects;
