/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Emitter from "../services/Emitter";


export default function TitleLetter(props) {
  const [isHovered, setHovered] = useState(false);
  const [isFlashlight, setFlashlight] = useState(false);

  const letterRef = useRef();

  useEffect(() => {
    Emitter.emit("SET_CURSOR", isFlashlight)
  }, [isFlashlight]);

  return (
    <h1
      ref={letterRef}
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      onClick={() => {
        if (props.letter === 'i') {
          setFlashlight(!isFlashlight)
        }
      }}
      style={{
        color: isHovered
          ? props.letter === 'i'
            ? '#ff2200' // Hover over 'i'
            : '#ff8000' // General hover
          : 'white', // No hover
        transition: 'transform 250ms',
        transform: isHovered ? `scale(1.2)` : null,
        animationName: props.letter === 'i'
          ? isFlashlight
            ? null
            : 'bounce'
          : null,
        animationDelay: '3s',
        animationDuration: '1000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in',
      }}
    >
      {props.letter}
    </h1>
  )
}