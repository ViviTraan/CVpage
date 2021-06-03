import React, { Component } from 'react';
import profile from './img/profile-pic.png';
import paper from './img/letter-paper.png';

export default class Header extends Component {
  render() {
    return (
      <header className="py-5">
        <div className="text-center my-5">
          <img className="img-fluid rounded-circle mb-4" src={profile} alt="..." style={{width: "200px"} }/>
          <h1 className="text-black fs-3 fw-bolder">Vivi Tran</h1>
          <p className="text-black-50 mb-0">Upcoming Full Stack Developer</p>
        </div>
      </header>);
  }
}