﻿import React, { Component } from 'react';
import user from './img/user.png';

export default class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#Home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#Resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    ) }
}