import React, { Component } from 'react';
import { MDBLightbox } from 'mdbreact';

class LightboxPage extends Component {
  state = {
    images: [
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', alt: 'My Image 1'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg', alt: 'My Image 2'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg', alt: 'My Image 3'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg', alt: 'My Image 4'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg', alt: 'My Image 5'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg', alt: 'My Image 6'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg', alt: 'My Image 7'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg', alt: 'My Image 8'},
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg', alt: 'My Image 9'}
    ]
  };

  render() {
    return <MDBLightbox md='4' images={this.state.images} />;
  }
}

export default LightboxPage;