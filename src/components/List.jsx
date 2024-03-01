import React from 'react'

const List = ({href,text,className}) => {
  return (
    <li><a href={href} className={`${className} font-dmsans font-normal text-[14px] text-listcolor hover:font-bold hover:text-black`}>{text}</a></li>
  )
}

export default List