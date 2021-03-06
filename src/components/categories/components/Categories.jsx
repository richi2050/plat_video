import React from 'react'
import Category from './Category'
import './Categories.css'

export default function Categories(props) {
  return (
    <div className='Categories'>
      {props.categories.map((item) =>{
          return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item}/>
      })}
    </div>
  )
}
