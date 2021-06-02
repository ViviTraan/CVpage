import React, { Component } from 'react';
import './css/Resume.css';


export default class Resume extends Component {
  render() {
    return (<section className="py-2">
      <div className="container resume-container" id="resume">
        <div className="row">
        <h6 className="text-dark">{this.props.resumeTitle} ~ {this.props.resumeTime } </h6>
          <p>{this.props.resumeDescription}</p>
          <hr/>
        </div>
      </div>
    </section>);
  }
} 