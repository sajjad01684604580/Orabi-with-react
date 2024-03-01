import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className={`${className} py-[9px] px-[32px] w-[92px]  text-white bg-[#262626] font-dmsans font-bold text-[14px]`}>{text}</div>
  )
}

export default Badge