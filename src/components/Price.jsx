import React from 'react'

const Price = ({text,className}) => {
  return (
    <div className={`${className} text-[16px] font-dmsans font-normal`}>{text}</div>
  )
}

export default Price