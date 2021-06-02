import React, { Component } from 'react';
import "./css/Contact.css";


export default class Contact extends Component {
  render() {
    return (<section className="white-section" id="contact">
      <div className="container-fluid contact-container">
        <div className="feature-box">
          <a href={this.props.link} target="_blank">
            <img src={this.props.img} alt={this.props.alt} style={{ height: 150}}/></a>
            <h3 className="feature-title">{this.props.title}</h3>
            <p className="feature-text">{this.props.description}</p>
          </div>
        </div>
    </section>)
  }
}