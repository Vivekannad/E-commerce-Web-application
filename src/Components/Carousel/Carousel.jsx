import React from 'react'
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className="slider-container">
        <Slider {...settings}>
            <div>
                <h1>Hello</h1>            </div>
                <div>
                    <h1>World</h1>
                </div>
        </Slider>
    </div>
    </>
)
}

export default Carousel