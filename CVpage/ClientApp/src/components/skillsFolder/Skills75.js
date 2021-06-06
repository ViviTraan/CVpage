import React, { Component } from 'react';
import './Skills.css';

export default class Skills75 extends Component {
  render() {
    return (
      <div className="progress-container">
        <span className="progress-title">{this.props.skillsName75}</span>
        <div className="progress" style={{ height: "5px" }}>
          <div className="progress-bar w-75" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}
