import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import List from '../List'
import Paragraph from '../Paragraph'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaFacebookF,FaWhatsapp } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='pt-[55px] pb-[59px] bg-[#F5F5F3]'>
        <Container>
            <Flex>
                <div className="w-[25%]">
                    <Flex className="">
                        <div className="pr-[143px]">
                            <Heading className="font-dmsans text-base font-bold pb-[16px]" as="h5" text="MENU"/>
                            <ul>
                                <List text="Home"/>
                                <List text="Shop"/>
                                <List text="About"/>
                                <List text="Contact"/>
                                <List text="Journal"/>
                            </ul>
                        </div>
                        <div className="">
                        <Heading className="font-dmsans text-base font-bold pb-[16px]" as="h5" text="SHOP"/>
                            <ul>
                                <List text="Category 1"/>
                                <List text="Category 2"/>
                                <List text="Category 3"/>
                                <List text="Category 4"/>
                                <List text="Category 5"/>
                            </ul>
                        </div>
                    </Flex>
                </div>
                <div className="w-[50%]">
                    <Flex className="">
                        <div className="pr-[143px]">
                            <Heading className="font-dmsans text-base font-bold pb-[16px]" as="h5" text="HELP"/>
                            <ul>
                                <List text="Privacy Policy"/>
                                <List text="Terms & Conditions"/>
                                <List text="Special E-shop"/>
                                <List text="Shipping"/>
                                <List text="Secure Payments"/>
                            </ul>
                        </div>
                        <div className="">
                        <Paragraph className="font-dmsans text-base font-bold pr-[248px] pb-3.5" text="(052) 611-5711 company@domain.com"/>
                        

                        <Paragraph className="text-[#6D6D6D] font-dmsans font-normal text-[14px]" text="575 Crescent Ave. Quakertown, PA 18951"/>
                        </div>
                    </Flex>
                </div>
                <div className="w-[25%]">
                    <Image src={logo}/>
                </div>
            </Flex>
            <div className="pt-[65px]">
                <Flex className="items-center">
                    <div className="w-[50%]">
                        <Flex className="gap-8">
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaWhatsapp/>
                        </Flex>
                    </div>
                    <div className="w-[50%] text-right">
                        <Paragraph text="2020 Orebi Minimal eCommerce Figma Template by Adveits" className="text-[#6D6D6D] font-dmsans font-normal text-[14px]"/>
                    </div>
                </Flex>
            </div>
        </Container>
    </footer>
  )
}

export default Footer