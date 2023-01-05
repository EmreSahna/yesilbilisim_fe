import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
  render() {
      return (
          <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={4000}>
              <div>
                <img src={require('../assets/yilbasi_indirim.jpg')} alt="" />
              </div>
              <div>
                <img src={require('../assets/yilbasi_indirim.jpg')} alt="" />
              </div>
          </Carousel>
      );
  }

  /*
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 10000,
      slidesToShow: 1,
      slidesToScroll: 3,
      autoplaySpeed: 3000,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={require('../assets/yilbasi_indirim.jpg')} alt="" />
          </div>
          <div>
            <img src={require('../assets/yilbasi_indirim.jpg')} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
  */
}