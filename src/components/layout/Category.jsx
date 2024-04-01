import React, { useRef } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bar from '../icons/Bar'
import Paragraph from '../Paragraph'

import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser,FaShoppingCart,FaSearch} from "react-icons/fa";
import List from '../List'

const Category = () => {
    let dropRef = useRef(null)
    let handledrop = ()=>{
        if (dropRef.current.style.display=="block") {
            dropRef.current.style.display="none"
        }
        else{
            dropRef.current.style.display="block"
        }
    }
  return (
    <section className='py-[45px] bg-categorybg border-y border-border'>
        <Container className="">
            <Flex className="items-center">
                <div className="w-1/4 relative">
                    <Flex className="items-center gap-5">
                    <button onClick={handledrop}>
                    <Bar/>
                    </button>
                    <Paragraph className="font-dmsans font-normal text-[14px]" text="Shop by Category"/>
                    </Flex>
                    <div className="bg-[#262626] w-[263px] absolute -bottom-[363px] hidden" ref={dropRef}>
                        <ul>
                            <List text="Accesories" className="font-dmsans font-normal text-sm text-'primarycolor': '#262626', py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                            <List text="Furniture" className="font-dmsans font-normal text-sm text-dropmenucolr py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                            <List text="Electronics" className="font-dmsans font-normal text-sm text-dropmenucolr py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                            <List text="Clothes" className="font-dmsans font-normal text-sm text-dropmenucolr py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                            <List text="Bags" className="font-dmsans font-normal text-sm dropmenucolr py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                            <List text="Home appliances" className="font-dmsans font-normal text-sm text-dropmenucolr py-[16px] pl-[21px] block hover:text-dropmenucolr hover:pl-8 duration-500 border-b border-[#444] cursor-pointer"/>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <Flex className="items-center justify-end">
                    <input type="text" placeholder='Search Products'  className='w-[601px] py-[16px] px-[21px] outline-none placeholder:font-dmsans placeholder:font-normal placeholder:text-[14px]'/>
                    <FaSearch className='absolute right-5'/>
                    </Flex>
                </div>
                <div className="w-1/4">
                    <Flex className="justify-end">
                        <FaUser />
                        <IoMdArrowDropdown/>
                        <FaShoppingCart className="ml-5"/>
                        
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Category