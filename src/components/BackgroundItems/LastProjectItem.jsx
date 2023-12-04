import { useState, useEffect } from 'react';
import Emitter from '../../services/Emitter';
import ArchiveSVG from '../../assets/icons/ArchiveSVG';
import links from '../../config/Links.config';
import useWindowSize from '../../hooks/useWindowSize';
import Breakpoints from '../../config/Breakpoints.config';

export default function LastProjectItem() {
  const [isHovering, setIsHovering] = useState(false)
  const [flashlightmode, setFlashLightMode] = useState(false)
  const [mobileMode, setMobileMode] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    size.width < Breakpoints.desktop.width ? setMobileMode(true) : setMobileMode(false);
    // Enable listener for cursor change
    Emitter.on("SET_CURSOR", (data) => {
      if (data) {
        setFlashLightMode(true);
      } else {
        setFlashLightMode(false);
      }
    })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <a
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textDecoration: 'none',
          pointerEvents: mobileMode
            ? 'auto'
            : flashlightmode
              ? 'auto'
              : 'none'
        }}
        onMouseEnter={() => {
          setIsHovering(true)
        }}
        onMouseLeave={() => {
          setIsHovering(false)
        }}
        href={links.lastProject}
      >
        <ArchiveSVG
          color={isHovering ? '#ff8000' : 'white'}
          isHovering={isHovering}
          scale={mobileMode ? 1.5 : 2}
        />
        <h2
          style={{
            fontSize: mobileMode ? '1.2rem' : 'auto',
            marginTop: 10,
            color: isHovering ? '#ff8000' : 'white',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          Last {mobileMode ? <br /> : null} Project
        </h2>
      </a>
    </div>
  )
}