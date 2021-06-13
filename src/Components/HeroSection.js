import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Hero1 from "../Images/hero1.png";
import Hero2 from "../Images/Group 228.png";

function HeroSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row"
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">Healthy life with</div>
                <h1 className="headtext">Nature Organic</h1>
                <p className="headtxt">
                  Vegetables are the edible parts of a plant that is used in
                  cooking or can be eaten now.
                </p>
                <Link to="/sign-up">
                  <Button className="headbtn">Explore Now</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={Hero2} alt={alt} className="home__hero-img" />
                <img src={Hero1} alt={alt} className="home__hero-img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
