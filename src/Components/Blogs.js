import React from "react";
import "./Blogs.css";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BlogItems from "./BlogItems";
import Blog1 from "../Images/Blog1.png";
import Blog2 from "../Images/Blog2.png";
import Blog3 from "../Images/Blog3.png";
import leaf from "../Images/Group 114.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

function Blogs() {
  const classes = useStyles();
  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <img src={leaf} alt="leafimage" />
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Read Our Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Container>
        </div>
      </main>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <BlogItems
                src={Blog1}
                text1="Blog Post One"
                text="Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed
               do eiusmod."
                text3="Read more"
                path="/"
              />
              <BlogItems
                src={Blog2}
                text1="Blog Post One"
                text="Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed
               do eiusmod."
                text3="Read more"
                path="/"
              />
              <BlogItems
                src={Blog3}
                text1="Blog Post One"
                text="Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed
               do eiusmod."
                text3="Read more"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
