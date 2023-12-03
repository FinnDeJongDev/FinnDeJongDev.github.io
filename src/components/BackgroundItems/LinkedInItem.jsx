import { useState, useEffect } from 'react';
import Emitter from '../../services/Emitter';
import LinkedInSVG from '../../assets/icons/LinkedInSVG';
import links from '../../config/links.config';

export default function LinkedInItem() {
  const [isHovering, setIsHovering] = useState(false)
  const [flashlightmode, setFlashLightMode] = useState(false)

  useEffect(() => {
    // Enable listener for cursor change
    Emitter.on("SET_CURSOR", (data) => {
      if (data) {
        setFlashLightMode(true);
      } else {
        setFlashLightMode(false);
      }
    })
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <a
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textDecoration: 'none',
          pointerEvents: flashlightmode ? 'auto' : 'none'
        }}
        onMouseEnter={() => {
          setIsHovering(true)
        }}
        onMouseLeave={() => {
          setIsHovering(false)
        }}
        href={links.linkedIn}
      >
        <LinkedInSVG
          color={isHovering ? '#ff8000' : 'white'}
          isHovering={isHovering}
        />
        <h2
          style={{
            marginTop: 10,
            color: isHovering ? '#ff8000' : 'white',
            userSelect: 'none',
          }}
        >
          Linked In
        </h2>
      </a>
    </div>
  )
}