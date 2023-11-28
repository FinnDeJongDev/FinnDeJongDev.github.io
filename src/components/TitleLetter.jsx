/* eslint-disable react/prop-types */
import { useState } from "react";


export default function TitleLetter(props) {
  const [isHovered, setHovered] = useState(false)

  console.log(props)

  return (
    <h1
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      style={{
        color: isHovered ? 'orange' : 'white',
        // animationName: isHovered ? 'jitter' : '',
        // animationDuration: '250ms',
        // animationIterationCount: 'infinite',
        transition: 'transform 250ms',
        transform: isHovered ? 'scale(1.1)' : null
      }}
    >
      {props.letter}
    </h1>
  )
}