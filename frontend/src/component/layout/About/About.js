import React from "react";
import "./aboutSection.css";
//const path = require("path");
import path from "path";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/umar-siddiqui-9b8171191/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={`${process.env.PUBLIC_URL}/pr.png`}
              alt="Founder"
            />
            <Typography>Mohammad Umar Siddiqui</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a wesbite made by me for my Final Year project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
