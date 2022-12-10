import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slider = () => {
    
        var settings = {
        //   dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          responsive:[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
              }]
            
          
        };
  return (
    <div className='sliders'>
    <Slider {...settings}>
        
      <div className='slider'>
        <img src="https://winex.az/img/mavi.png" alt="" />
      </div>
      <div className='slider'>
        <img src="	https://winex.az/img/koton.png" alt="" />
      </div>
      <div className='slider'>
       <img src="	https://winex.az/img/ipekyol.png" alt="" />
      </div>
      <div className='slider'>
        <img src="https://winex.az/img/mango.jpg" alt="" />
      </div>
      <div className='slider'>
       <img src="	https://winex.az/img/modanisa.png" alt="" />
      </div>
      <div className='slider'>
       <img src="https://winex.az/img/morhipo.png" alt="" />
      </div>
      
    </Slider>
  </div>
  )
}

export default slider
