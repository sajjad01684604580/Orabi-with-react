import React from 'react'
import Container from '../Container'
import Image from '../Image'
import phone from '../../assets/phone.png'
import clock from '../../assets/clock.png'
import Flex from '../Flex'
import lamp from '../../assets/lamp.png'
const Phone = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex className="justify-between">
            <div className="w-[780px]">
                <Image src={phone} className="w-full"/>
            </div>
            <div className="w-[780px] text-right">
                <Image src={clock} className="w-full pb-[40px]"/>
                <Image src={lamp} className="w-full"/>
            </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Phone