import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Img
} from "./FooterStyles";
import logo from "../Images/Group 228.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "../styles.css";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <img src={logo} alt="Logo" className="logo_img" />
            <p style={{ color: "white" }}>organic</p>
            <FooterLink href="#" style={{ marginTop: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </FooterLink>
          </Column>
          <Column>
            <Heading>Information</Heading>
            <div class="footer-border"></div>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Products</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Products</FooterLink>
          </Column>
          <Column>
            <Heading>Follow Us</Heading>
            <div class="footer-border"></div>
            <FooterLink href="#">
              <FacebookIcon />
            </FooterLink>
            <FooterLink href="#">
              <InstagramIcon />
            </FooterLink>
            <FooterLink href="#">
              <TwitterIcon />
            </FooterLink>
            <FooterLink href="#">
              <YouTubeIcon />
            </FooterLink>
          </Column>
          <Column>
            <div class="footer-border"></div>
            <Heading>© Copyright 2020 Nature</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
