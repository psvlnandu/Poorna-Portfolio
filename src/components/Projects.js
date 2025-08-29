import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "GaitSIT": {
        title: "GaitSIT VR",
        desc:
          "A Gait Analysis application for physical therapy dept",
        techStack: "C# (UNITY), VR",
        link: "https://github.com/slakh96/no-mans-land",
        open: "https://gazijarin.itch.io/no-mans-land",
        image: "/assets/poster-vr.png"
      },
      Truth: {
        title: "truth",
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/gazijarin/truth",
        open: "https://gazijarin.github.io/Truth/",
        image: "/assets/truth.png"
      },
      "Tall Tales": {
        title: "tall tales",
        desc:
          "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
        link: "https://github.com/gazijarin/TallTales",
        open: "https://talltales.herokuapp.com/",
        image: "/assets/talltales.png"
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A small JS library that helps with clear and succinct data presentation.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/gazijarin/Portfolio.js",
        open: "https://afternoon-ocean-92382.herokuapp.com/",
        image: "/assets/portfolio.png"
      }
    };
    const projects = {
      "AWS Deployment with GitLab CI": {
        desc:
          "Designed and built a scalable, production-ready CI/CD pipeline to automate the ML model lifecycle ML Operations principle to automate the entire workflow from code commit to live cloud deployment, including build, test and deployment stages.",
        techStack: "Python , CI CD, GitLab",
        link: "https://github.com/psvlnandu/AWS-S3-EBS-Deployment-with-GitLab-CI"
      },
      "Fine-Tuned Emotional Classifier CLI": {
        desc:
          "Engineered a complete MLOps workflow to fine-tune a DistilBERT model for emotion classification, achieving decent accuracy on the target dataset, Developed and packaged the application into a professional-grade Command-Line Interface (CLI), making it easily deployable and installable via pip",
        techStack: "Python, DistilBERT, Huggig Face",
        link: "https://github.com/psvlnandu/Fine-Tuned-Emotional-Classifier-CLI",
        open:""
      },
      "Toxic Comment Classifier using GPT-2": {
        desc:
          "Fine-tuned a GPT-2 model to effectively classify toxic online comments, achieving a high F1-score.Implemented custom text preprocessing and tokenization strategies specifically tailored for the GPT-2 architecture to optimize model performance. Experimented with various hyperparameters and training techniques to improve model accuracy and reduce training time.",
        techStack: "Python, GPT2, Hugging face Spaces",
        link:"https://github.com/psvlnandu/Toxic-Comment-Classifier-GPT2-Model",
        open:"https://huggingface.co/raavip/gpt2-toxic-comment-classifier"
      }
    };

    return (
      <div id="projects">
        {/* <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
      <div className="section-header ">
          <span className="section-title">projects</span>
      </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
