import React from "react";
import "../styles/Publications.css";
import FadeInSection from "./FadeInSection";

class Publications extends React.Component {
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
    const publications = [
      {
        title: "Ocular Age: A comparative study of Iris and Periocular Images for Pediatric Age Estimation",
        journal: "IEEE Transactions on Visualization & Computer Graphics",
        link: "https://ieeexplore.ieee.org/document/11096571" 
      },
    ];

    return (
      <div id="publications">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">publications</span>
          </div>
          <ul className="publications-list">
            {publications.map((pub, index) => (
              <li key={index}>
                <b>{pub.title}</b>
                <br />
                {pub.journal && <span>{pub.journal}</span>}
                {pub.link && (
                  <div>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">
                      View Paper
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    );
  }
}

export default Publications;