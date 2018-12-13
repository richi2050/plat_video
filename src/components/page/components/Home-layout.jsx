import React from 'react'
import './Home-layout.css'

export default function HomeLayout(props) {
  return (
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}
