import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";
import resume from "../assets/R_ML_Standard.pdf";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { CloudDownloadSharp, FontDownloadOutlined } from "@material-ui/icons";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Poorna Raavi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:raavip@clarkson.edu">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/psvlnandu" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/psvl-nandu-r/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
              <OverlayTrigger
                placement="bottom" // where the tooltip appears
                overlay={<Tooltip id="medium-tooltip">Medium</Tooltip>}>
                <Nav.Link href="https://medium.com/@raavip" target="_blank">
                  <BorderColorIcon style={{ fontSize: 20 }}></BorderColorIcon>
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom" // where the tooltip appears
                overlay={<Tooltip id="resume-tooltip">Resume</Tooltip>}>
                <Nav.Link href={resume} target="_blank">
                  <CloudDownloadSharp style={{ fontSize: 20 }}></CloudDownloadSharp>
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
