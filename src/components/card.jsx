import React from 'react'

export default function 
(props) {
  return (
    <div>
        <li>
      <div className='incard'>
        <img src={props.img} alt="img1"/>
      <span>{props.title}</span>
      <p>{props.parg}</p>
      </div>
      </li>
    </div>
  )
}
