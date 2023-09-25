import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Event() {
    return (
      <><MDBCarousel showIndicators showControls fade>
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
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='...'
            >
                <h5>Four slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={5}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                alt='...'
            >
                <h5>Five slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>
        </MDBCarousel>
        <MDBContainer>Anand</MDBContainer></>
    );
  }

