import React from 'react'
import Image from '../Image'
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <section>
        <a href="#" target="_blank">
        <Image src={banner} className='w-full'/>
        </a>
    </section>
  )
}

export default Banner
