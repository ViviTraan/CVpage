import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="py-5 " style={{
        backgroundImage: "url(" + "https://source.unsplash.com/wfh8dDlNFOk/1600x900" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' 
      }}>
        <div className="text-center my-5">
          <img className="img-fluid rounded-circle mb-4" src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg" alt="..." />
          <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
          <p className="text-white-50 mb-0">Landing Page Template</p>
        </div>
      </header>);
  }
}