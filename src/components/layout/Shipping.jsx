import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import Paragraph from '../Paragraph';
import Number from '../icons/Number';

import Truck from '../icons/Truck';
import Return from '../icons/Return';

const Shipping = () => {
  return (
    <section className='pt-[22px] pb-[21px] border-y border-border'>
        <Container>
            <Flex>
                <div className="w-1/3">
                <Flex className="items-center gap-4">
                <Number/>
                <Paragraph text="Two years warranty" className="font-dmsans font-normal text-[14px] text-[#6D6D6D]"/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className="items-center gap-4 justify-center">
                <Truck/>
                <Paragraph text="Free shipping" className="font-dmsans font-normal text-[14px] text-[#6D6D6D]"/>
                </Flex>
                </div>
                <div className="w-1/3">
                    <Flex className="items-center gap-4 justify-end">
                    <Return/>
                    <Paragraph text="Return policy in 30 days" className="font-dmsans font-normal text-[14px] text-[#6D6D6D]"/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Shipping
