import React from 'react'
import './Css/Card.css'

function Card(props) {
    const classes = 'card ' + props.className;
  return (
    <div className= {classes}>
        {props.children} 
        {/* use to wrap all the ither tags in our custom HTML tag */}
    </div>
  )
}

export default Card