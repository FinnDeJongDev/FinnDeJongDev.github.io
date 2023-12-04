import { useEffect, useRef, useState } from "react";

import Emitter from "../services/Emitter";

import useMousePosition from "../hooks/useMousePosition";

// Cursors
import defaultCursor from '../assets/cursor/dark-hover.png';
import flashlightCursor from '../assets/cursor/flashlight.png';

export default function Cursor() {
  const [flashlightMode, setFlashlightMode] = useState('');
  const canvasRef = useRef();
  const mousePos = useMousePosition()

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');

    // Clear last frames' cursor
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Initialize images (due to them not loading inmediately when switching)
    var flashlightCur = new Image();
    flashlightCur.src = flashlightCursor;

    var defaultCur = new Image();
    defaultCur.src = defaultCursor;

    // Draw cursor depending on version
    if (flashlightMode) {
      ctx.drawImage(flashlightCur, mousePos.x - 26, mousePos.y - 35);
    } else {
      ctx.drawImage(defaultCur, mousePos.x - 17, mousePos.y - 17);
    }


  }, [flashlightMode, mousePos])

  // Emit cursor type
  useEffect(() => {
    Emitter.on("SET_CURSOR", (data) => {
      if (data) {
        setFlashlightMode(true)
      } else {
        setFlashlightMode(false)
      }
    })

    return () => {
      Emitter.off("SET_CURSOR")
    }

  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: 'absolute',
        pointerEvents: 'none'
      }}
    />
  )
}