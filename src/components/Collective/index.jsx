import React from 'react'
import phone from '../../Assets/icon/phone.svg'
import vk from '../../Assets/icon/Vk.svg'
import avatar from '../../Assets/img/avatar.jpg'


const Collective = ({rank, number, image}) => {
  return (
    <div className='border-[#272727] border-0.5 outline py-[34px] px-[60px] max-w-[522px] flex flex-col align-center text-center'> 
        <div className='h-[402px] w-[402px] rounded-[15px] overflow-hidden'>
            <img className='h-[100%]' src={image ? image : avatar} alt="" />
        </div>
        <div className='text-[#272727] text-[22px] font-[600] pt-[28px]'>{rank}</div>
        <a href={`tel: +${number}`}></a><div className='flex justify-center pt-[12px] gap-[17px] '>
            <div><img src={phone} alt="" /></div>
            <div>{number}</div>
        </div>
        <a href="https://vk.com"><div className='flex justify-center pt-[12px]'><img  src={vk} alt="" /></div></a>
    </div>
  )
}

export default Collective