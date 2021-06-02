import React, { Component } from 'react';
import flower from './img/flower-break.png';
import './css/PicSeperator.css';

export default class PicSeperator extends Component {
  render() {
    return (<div className="pic-container"><img className="pic-seperator"src={flower} alt="flower"/></div>);
  }
}