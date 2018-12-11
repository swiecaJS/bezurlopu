import './Paralax.css'
import { withPrefix } from 'gatsby'
import React from 'react'

export default function Paralax ({ bgImage }) {
  console.log('paralax', withPrefix('/img/bg.jpg'))

  const imageStyle = {
    backgroundImage: `url(${bgImage})`
    // backgroundImage: `url(${withPrefix('/img/bg.jpg')})`
  }

  return (
    <div className='parallax' style={imageStyle}>
      <div className='paralax_content'>
        <h2>Bez Urlopu</h2>
        <h3>Życie bez czekania na urlop</h3>
      </div>
    </div>
  )
}
