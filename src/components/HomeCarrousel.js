import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function HomeCarrousel() {
    return (
      <>
        <Carousel fade className='carousel-home' id='carousel-home'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0564/0830/9941/files/FPO_NOR_5796_HOME_StoryBanner_1920x.jpg?v=1620397495"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vendor.webuildthemes.com/assets/images/background-2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vendor.webuildthemes.com/assets/images/background-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>

      
    );
}

export default HomeCarrousel
