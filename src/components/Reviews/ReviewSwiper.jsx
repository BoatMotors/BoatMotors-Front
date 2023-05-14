
import React, { useRef } from 'react'
import Slider from 'react-slick';

const ReviewSwiper = ({slideContent}) => {
    const ref = useRef()
    console.log(ref, "ref");
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
      };
      // onClick={()=> {ref.current.prev()}}
  return (
    <div>
        {/* <button > next </button> */}
        <Slider {...settings}>
              {slideContent}
        </Slider>
    </div>
  )
}

export default ReviewSwiper