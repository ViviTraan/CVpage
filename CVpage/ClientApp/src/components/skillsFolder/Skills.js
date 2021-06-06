import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div className="progress-container">
        <span className="progress-title">{this.props.skillsName }</span>
        <div className="progress" style={{ height: "5px" } }>
          <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>
     );
  }
}
