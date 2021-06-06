import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-container container" >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse .d-none .d-xs-block .d-s-none" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item home-button" data-cy="home-button"><a className="nav-link active" aria-current="page" href="#about">Home</a></li>
                <li className="nav-item" data-cy="about-button"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item" data-cy="resume-button"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item" data-cy="contact-button"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    ) }
}