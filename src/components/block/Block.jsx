import React from 'react'
import "./block.css"

const Block = ({mark, changemark,position}) => {
  return (
    <div className={`block mark${mark}`} onClick={e=>changemark(position)}>
      
    </div>
  )
}

export default Block
