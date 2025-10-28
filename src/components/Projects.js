import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

import insult from "../assets/insult.png";
import gaitsit from "../assets/poster-vr.png";
import studySquad from "../assets/Chat GPT vs StudySquad.png"
import luge from "../assets/Clarkson Track Viz Logo (1).png"
import ann_generator from "../assets/ANN01.png"

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
        // link: "https://www.linkedin.com/posts/shipley-center-for-innovation_meet-balance-gaitsit-a-previous-clarkson-activity-7315466941630947328-cwEY/",
        open: "https://www.linkedin.com/posts/shipley-center-for-innovation_meet-balance-gaitsit-a-previous-clarkson-activity-7315466941630947328-cwEY/",
        image: gaitsit
      },
      "StudySquad": {
        title: "StudySquad",
        desc:
          "Your personal squad of agents to get you through the semester.",
        techStack: "RAG, Gemini, OpenAI, FastAPI, Gardio",
        link: "https://devpost.com/software/studysquad",
        open: "https://www.linkedin.com/feed/update/urn:li:activity:7388985392961789952/",
        image: studySquad
      },
      
      "Luge": {
         title: "Luge Track Visualization",
        desc:
        "A VR and 3D visualization tool developed for Olympic luge athletes. Due to confidentiality, project details will be shared after its official release by the team.",
        techStack: "Unity (C#), Blender, VR, Opencascade, c++",
        // link: "https://github.com/gazijarin/TallTales",
        open: "https://www.usaluge.org/",
        image: luge
      },
      "ANN": {
        title: "Ethical AI: ANN Generator",
        desc:
          "AI tool that auto-generates Adverse Action Notice ",
          // compliant responses for banks using RAG and OpenAI, helping reduce review time and regulatory risk.",
        techStack: "RAG, OpenAI, HuggingFace Spaces",
        link: "https://medium.com/@raavip/i-built-something-that-banks-never-did-it-before-ab55daea5d41",
        open: "https://huggingface.co/spaces/raavip/Compliant_AANGenerator",
        image: ann_generator
      } ,
      "TCC": {
        title: "Toxic Comment Classifier",
        desc:
          "fine-tunes a gpt2-medium model to detect toxicity in online comments.",
        techStack: "Python, PyTorch, Hugging Face",
        link: "https://github.com/psvlnandu/Toxic-Comment-Classifier-GPT2-Model",
        open: "https://huggingface.co/spaces/raavip/CC_GPT2Model",
        image: insult
      }           
    };
    const projects = {
      "AWS Deployment with GitLab CI": {
        desc:
          "Designed and built a scalable, production-ready CI/CD pipeline to automate the ML model lifecycle ML Operations principle to automate the entire workflow from code commit to live cloud deployment, including build, test and deployment stages.",
        techStack: "Python , CI CD, GitLab, AWS Elastic bean",
        link: "https://github.com/psvlnandu/AWS-S3-EBS-Deployment-with-GitLab-CI"
      },
      "Fine-Tuned Emotional Classifier CLI": {
        desc:
          "Engineered a complete MLOps workflow to fine-tune a DistilBERT model for emotion classification, achieving decent accuracy on the target dataset, Developed and packaged the application into a professional-grade Command-Line Interface (CLI), making it easily deployable and installable via pip",
        techStack: "Python, DistilBERT, Huggig Face",
        link: "https://github.com/psvlnandu/Fine-Tuned-Emotional-Classifier-CLI",
        open:""
      },
      
      "Returns & Refunds": {
        title: "Soundcore Refund Policy RAG",
        desc: "A RAG-based chatbot that answers refund, replacement, and warranty questions using Soundcore’s official policy data for accurate, conversational support.",
        techStack: "Python, RAG, Hugging face Spaces",
        link:"",
        open:"https://huggingface.co/spaces/raavip/RAG-documents"
      },
      "Toxic Comment Classifier using GPT-2": {
        desc:
          "Fine-tuned a GPT-2 model to effectively classify",
          //  toxic online comments, achieving a high F1-score.Implemented custom text preprocessing and tokenization strategies specifically tailored for the GPT-2 architecture to optimize model performance. Experimented with various hyperparameters and training techniques to improve model accuracy and reduce training time.",
        techStack: "Python, GPT2, Hugging face Spaces",
        link:"https://github.com/psvlnandu/Toxic-Comment-Classifier-GPT2-Model",
        open:"https://huggingface.co/raavip/gpt2-toxic-comment-classifier"
      }
    };

    return (
      <div id="projects">
         <div className="section-header ">
          <span className="section-title">projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <p>{spotlightProjects[key]["desc"]}</p>
                <p className="techStack">{spotlightProjects[key]["techStack"]}</p>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                ></ExternalLinks>
              </Carousel.Caption>

            </Carousel.Item>
          ))}
        </Carousel> 
        {/* <div className="project-container">
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
        </div> */}
      </div>
    );
  }
}

export default Projects;
