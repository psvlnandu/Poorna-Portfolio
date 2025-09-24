import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import meImage from "../assets/me1.JPG";


class About extends React.Component {
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
    const one = (
      <p>
        I am currently a Student at
        <a href="https://clarkson.edu/"> Clarkson University</a>, 
        pursuing my Master's in Computer Science
      </p>
    );
    const two = (
      <p>
        I am always eager to tackle new challenges and enjoy participating in hackathons and seminars.
      </p>
    );

    const tech_stack = [
      "Python",
      "Java",
      "Unity",
      "Machine Learning & LLMs"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Poorna Raavi" src={meImage} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
