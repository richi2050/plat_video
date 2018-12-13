import React from 'react'
import Category from './Category'

export default function Categories(props) {
    console.log(props.categories)
  return (
    <div>
      {props.categories.map((item) =>{
          return <Category key={item.id} {...item}/>
      })}
    </div>
  )
}
