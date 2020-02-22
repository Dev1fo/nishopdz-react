import React from 'react';
import { MDBGallery, MDBGalleryList , MDBMask, MDBBox } from 'mdbreact';

function Gallery() {
  const dataImg = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      cols: 1,
      title: 'image',
      overlay: 'Ref:Greta21'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
      cols: 2,
      title: 'image',
      overlay: 'Ref:boulogne99'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
      cols: 1,
      title: 'image',
      overlay: 'Ref: Pizza99'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
      cols: 2,
      title: 'image',
      overlay: 'Ref:Paris21'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
      cols: 2,
      title: 'image',
      overlay: 'react2019'
    },

    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
      cols: 1,
      title: 'image',
      overlay: 'Ref:'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
      cols: 2,
      title: 'image',
      overlay: 'Ref:tealk42'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
      cols: 1,
      title: 'image',
      overlay: 'Ref:teal-light00',
      
    }
  ];

  return (
    <MDBGallery cols={4}>
      {dataImg.map(({ cols, img, title, overlay }, i) => {
        return (
          <MDBGalleryList
            key={i}
            cols={cols || 1}
            rows={2}
            titleClasses='view overlay'
          >
            <img src={img} alt={title} />
            <MDBMask className='flex-center' overlay={overlay}>
              <MDBBox
                tag='p'
                color='yellow'
                style={{
                  position: 'absolute',
                  top: '50%',
                  fontWeight:"bold",
                  fontSize:"30px"
                }}
              >
                With {overlay}
              </MDBBox>
            </MDBMask>
          </MDBGalleryList>
        );
      })}
    </MDBGallery>
  );
}

export default Gallery;