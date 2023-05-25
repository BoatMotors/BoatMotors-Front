
import React, { useRef } from 'react'
import Slider from 'react-slick';
import next from './../../Assets/icon/next.svg'
import prev from './../../Assets/icon/prev.svg'

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
    <div className='relative'>
        <button className='absolute top-[290px] left-[-20px]'> <img src={prev} alt="" /> </button>
        <Slider className='px-[140px]' {...settings}>
              {slideContent}
        </Slider>
        <button className='absolute top-[290px] right-[-20px]'> <img src={next} alt="" /> </button>
    </div>
  )
}

export default ReviewSwiper