import React, { Component } from 'react';
import "./css/About.css";
import "./css/Fonts.css";
import about from './img/about-signature.png';


export default class About extends Component {
  render() {
    return (
      <section className="py-5" id="about">

        <div className="container mt-5 about-container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="about-title">Hi! My name is Vivi..</h2>
              <p className="about-text">..and I'm currently studying "System development - Object Oriented Programming", other than being a fancy word I'd say it helps me manage my ache for always wanting to challenge myself in life.
              <br />  
                <br />  
              Growing up I always loved keeping busy, whether it was in school or in a job. I concluded that I as a person needed to feel some sort of connection to constantly evolving. 
              So, I worked and traveled a lot while searching for my path in life.
              <br /> 
              When neither work nor traveling was fulfilling me, I knew it was time to dig deeper. So, I asked myself, when have I felt being challenged ? Well, I remembered when I was younger, I used to love designing my blog, different styles every week, trying to figure out how to code and the sense of satisfaction when I successfully did it, indescribable.
              <br />
                <br />  
                So here I am, finally found my path.</p>
              <div className="about-signature"><img className="about-image"src={about}/></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

