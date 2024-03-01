import React from 'react'

import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import newone from '../../assets/ourone.png'
import Badge from '../Badge'
import Paragraph from '../Paragraph'
import Price from '../Price'

import { LuRefreshCw } from "react-icons/lu";

import newtwo from '../../assets/ourtwo.png'
import newthree from '../../assets/ourthree.png'
import newfour from '../../assets/ourfour.png'
const Bestseller = () => {
  return (
    <section className='pb-[118px]'>
        <Container>
            <div className="">
                <Heading text="Our Bestsellers" as="h2"/>
            </div>
            <Flex className="justify-between">
                <div className="w-[370px] relative group">
                    <div className="relative overflow-hidden">
                    <Image src={newone}/>
                    <Badge text="New" className="absolute top-5 left-5"/>
                    <div className="py-[25px] pr-[30px] bg-white  group-hover:bottom-0 absolute -bottom-[183px] w-full duration-500">
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Wish List" className='pr-[15px] text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaHeart/>
                            </Flex>
                        </div>
                        <div className="py-[21px]">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Compare" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black '/>
                                <LuRefreshCw/>
                            </Flex>
                        </div>
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Cart" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaShoppingCart/>
                            </Flex>
                        </div>
                    </div>
                    </div>
                    <div className="pt-[24px]">
                        <Flex className="items-center justify-between">
                        <Paragraph text="Basic Crew Neck Tee" className="font-dmsans font-bold text-[20px]"/>
                        <Price text="$44.00"/>
                        </Flex>
                    </div>
                </div>
                <div className="w-[370px] relative group">
                    <div className="relative overflow-hidden">
                    <Image src={newtwo}/>
                    <Badge text="New" className="absolute top-5 left-5"/>
                    <div className="py-[25px] pr-[30px] bg-white  group-hover:bottom-0 absolute -bottom-[183px] w-full duration-500">
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Wish List" className='pr-[15px] text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaHeart/>
                            </Flex>
                        </div>
                        <div className="py-[21px]">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Compare" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black '/>
                                <LuRefreshCw/>
                            </Flex>
                        </div>
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Cart" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaShoppingCart/>
                            </Flex>
                        </div>
                    </div>
                    </div>
                    <div className="pt-[24px]">
                        <Flex className="items-center justify-between">
                        <Paragraph text="Basic Crew Neck Tee" className="font-dmsans font-bold text-[20px]"/>
                        <Price text="$44.00"/>
                        </Flex>
                    </div>
                </div>
                <div className="w-[370px] relative group">
                    <div className="relative overflow-hidden">
                    <Image src={newthree}/>
                    <Badge text="New" className="absolute top-5 left-5"/>
                    <div className="py-[25px] pr-[30px] bg-white  group-hover:bottom-0 absolute -bottom-[183px] w-full duration-500 ">
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Wish List" className='pr-[15px] text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaHeart/>
                            </Flex>
                        </div>
                        <div className="py-[21px]">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Compare" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black '/>
                                <LuRefreshCw/>
                            </Flex>
                        </div>
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Cart" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaShoppingCart/>
                            </Flex>
                        </div>
                    </div>
                    </div>
                    <div className="pt-[24px]">
                        <Flex className="items-center justify-between">
                        <Paragraph text="Basic Crew Neck Tee" className="font-dmsans font-bold text-[20px]"/>
                        <Price text="$44.00"/>
                        </Flex>
                    </div>
                </div>
                <div className="w-[370px] relative group">
                    <div className="relative overflow-hidden">
                    <Image src={newfour}/>
                    <Badge text="New" className="absolute top-5 left-5"/>
                    <div className="py-[25px] pr-[30px] bg-white  group-hover:bottom-0 absolute -bottom-[183px] w-full duration-500 ">
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Wish List" className='pr-[15px] text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaHeart/>
                            </Flex>
                        </div>
                        <div className="py-[21px]">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Compare" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black '/>
                                <LuRefreshCw/>
                            </Flex>
                        </div>
                        <div className="">
                            <Flex className="items-center justify-end">
                                <Paragraph text="Add to Cart" className='pr-[15px]  text-[16px] font-sans font-normal text-[#767676] hover:font-bold hover:text-black'/>
                                <FaShoppingCart/>
                            </Flex>
                        </div>
                    </div>
                    </div>
                    <div className="pt-[24px]">
                        <Flex className="items-center justify-between">
                        <Paragraph text="Basic Crew Neck Tee" className="font-dmsans font-bold text-[20px]"/>
                        <Price text="$44.00"/>
                        </Flex>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Bestseller