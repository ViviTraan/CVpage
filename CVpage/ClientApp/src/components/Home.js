import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import About from './About.js';
import Resume from './Resume.js';
import Footer from './Footer.js';
import PicSeperator from './PicSeperator.js';
import Contact from './Contact.js';
import github from "./img/github.png";
import letter from "./img/letter.png";
import linkedin from "./img/linkedin.png";
import { Container, Row, Col } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <body>
        <Navbar/>
        <Header/>
        <About />
        <PicSeperator/>
        <Resume />
        <Row className="row-contact">
          <Col lg="4">
            <Contact
              link="https://github.com/ViviTraan"
          img={github}
          title="Github"
          description="See all my coding projects."
            />
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
      </body>
    );
  }
}
