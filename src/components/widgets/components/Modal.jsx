import React from 'react'
import './Modal.css'

export default function Modal(props) {
  return (
    <div className='Modal'>
      {props.children}
      <button className='Modal-close' onClick={props.handleClick}></button>
    </div>
  )
}
