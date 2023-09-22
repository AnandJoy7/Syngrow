import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Event() {
  return (
    <><><MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
              className='w-100 d-block'
              itemId={1}
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
              alt='...'
          >
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
              className='w-100 d-block'
              itemId={2}
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
              alt='...'
          >
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
              className='w-100 d-block'
              itemId={3}
              src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
              alt='...'
          >
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselItem>
      </MDBCarousel><MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
              <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href='#'>Button</MDBBtn>
              </MDBCardBody>
          </MDBCard></><MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                  <a>
                      <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
              </MDBRipple>
              <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href='#'>Button</MDBBtn>
              </MDBCardBody>
          </MDBCard></>
    
  );
}