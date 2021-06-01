import React, { Component } from 'react';

export default class PicSeperator extends Component {
  render() {
    return (<div class="py-5 bg-image-full" style={{
      backgroundImage: "url(" + "https://source.unsplash.com/4ulffa6qoKA/1200x800" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ height: "20rem" }}></div>
    </div>);
  }
}