import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
const Header = () => {
  return (
    <header className='py-[32px]'>
        <Container>
            <Flex>
                <div className="w-[5%]">
                    <Image src={logo}/>
                </div>
                <div className="w-[95%]">
                    <ul>
                        <Flex className="justify-center gap-x-10">
                        <List text="Home"/>
                        <List text="Shop"/>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                        </Flex>
                    </ul>
                </div>
            </Flex>
        </Container>
    </header>
  )
}

export default Header