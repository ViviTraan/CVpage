import React, { Component } from 'react';
import Navbar from './navbarFolder/Navbar.js';
import About from './aboutFolder/About';
import Resume from './resumeFolder/Resume.js';
import Skills from './skillsFolder/Skills';
import Skills75 from './skillsFolder/Skills75';
import Footer from './Footer.js';
import PicSeperator from './picSeperatorFolder/PicSeperator.js';
import Contact from './contactFolder/Contact.js';
import github from "./img/github.png";
import letter from "./img/letter.png";
import linkedin from "./img/linkedin.png";
import { Row, Col } from 'reactstrap';
import './resumeFolder/Resume.css';
import background from './img/background-image.svg';

export class Home extends Component {
  static displayName = Home.name;

  numberOfRepos = 0;

  constructor() {
    super();
    this.state = {
      numberOfRepos: 0
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/vivitraan/repos')
      .then(response => response.json())
      .then(json =>
      { this.setState({ numberOfRepos: json.length }) });
  }

  render() {
    return (
      <div className="background-image"style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundAttachment:'fixed' }}>
        <Navbar/>
        <About/>
          
          <Row>
          <Col className="work-column"lg="6" md="12">
            <h2 className="mb-5 work-title" id="resume">Work Experience</h2>
        <Resume
          resumeTitle="Store Employee / Flying Tiger"
              resumeTime="November 2020 - March 2020"
              resumeDescription="I was responsible for the store from opening to closing hours. Payment, service, stocking up and cleaning at the end of the day. " />
          <Resume
              resumeTitle="Shop Assistant / Ahlsell"
              resumeTime="May 2019 - August 2020"
              resumeDescription="Responsible for the operation of business, making sure that every customer customers feels seen and
               helping them find goods or possibly order to store, as well as
              stock replenishment." />
            <Resume
              resumeTitle="Warehouse Worker / Iduna AB"
              resumeTime="November 2018 - January 2019"
              resumeDescription="Worked for staffing company Lernia at E-commerce for Guldfynd, Albrekts Guld & Hallbergs
Guld. My duties were picking and packing orders." />
            <Resume
              resumeTitle="Cashier / Gekås AB"
              resumeTime=" September 2015 - September 2017"
              resumeDescription="As a Cashier at Gekås my head responsibility was in the cashier line. I handled the payment for the store items, checked so the customers had a good experience in the warehouse." />
          </Col>
          <Col lg="6" md="12" className="skills-container">
            <h2 className="mb-5 skills-title">Skills</h2>
            <Skills
              skillsName="HTML" />
            <Skills
              skillsName="CSS" />
            <Skills
              skillsName="Bootstrap 4" />
            <Skills75
              skillsName75="JavaScript"
            />
            <Skills75
              skillsName75="React"
            />
            <Skills75
              skillsName75="C#"
            />
            <Skills75
              skillsName75="SQL" />
          </Col>
        </Row>
        <PicSeperator />
        <Row className="row-contact">
          <Col lg="4">
            <Contact
              link="https://github.com/ViviTraan"
              img={github}
              title="Github"
              description="See all my coding projects."
            />
            <p className="repos">Number of repos: {this.state.numberOfRepos}</p>
            </Col>
          <Col lg="4">
            <Contact
              link="mailto:vivitraan3@gmail.com"
          img={letter}
          title="Contact Me"
          description="Phone: 0708852399"
            />
            </Col>
          <Col lg="4">
            <Contact
          link="https://www.linkedin.com/in/vivi-tran-bb8400168/"
          img={linkedin}
          title="LinkedIn"
          description="Join my contact-branch."
          alt="LinkedIn"
            />
            </Col>
        </Row>
          
        <Footer />
        </div>

    );
  }
}
