import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
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
import Link from "@material-ui/core/Link";
import "./Card.css";
import cardimg from "../Images/Group 207.png";
import card2 from "../Images/Group 205.png";
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

export default function Cardpart() {
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
              Welcome to Nature
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
      <div className="outer-grid">
        <div className="inner-grid">
          <img src={cardimg} alt="Cardimage" />
          <img src={card2} alt="Cardimage" />
          <img src={cardimg} alt="Cardimage" />
          <img src={cardimg} alt="Cardimage" />
        </div>
      </div>
    </>
  );
}
