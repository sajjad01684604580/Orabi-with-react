import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'
import Paragraph from '../Paragraph'

import { IoMdArrowDropdown } from "react-icons/io";
const Category = () => {
  return (
    <section className='py-[45px] bg-categorybg border-y border-border'>
        <Container>
            <Flex className="items-center">
                <div className="w-1/4">
                    <Flex className="items-center gap-5">
                    <Bar/>
                    <Paragraph className="font-dmsans font-normal text-[14px]" text="Shop by Category"/>
                    </Flex>
                </div>
                <div className="w-1/2 relative">
                    <Flex className="items-center justify-end">
                    <input type="text" placeholder='Search Products'  className='w-[601px] py-[16px] px-[21px] outline-none placeholder:font-dmsans placeholder:font-normal placeholder:text-[14px]'/>
                    <FaSearch className='absolute right-5'/>
                    </Flex>
                </div>
                <div className="w-1/4">
                    <Flex className="justify-end">
                        
                        <IoMdArrowDropdown/>
                        
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Category