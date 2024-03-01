import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`${props.className} font-dmsans font-bold text-[39px] pb-[48px]`}>{props.text}</props.as>
  )
}

export default Heading