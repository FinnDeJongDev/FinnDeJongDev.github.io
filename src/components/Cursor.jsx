import { useEffect, useRef } from "react";

import cursor from '../assets/cursor/dark-hover.png'
import useMousePosition from "../hooks/useMousePosition";

export default function Cursor() {
  const mousePos = useMousePosition()

  const canvasRef = useRef();

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // This should be the cursor
    let cur = new Image()
    cur.src = cursor
    ctx.drawImage(cur, mousePos.x - 17, mousePos.y - 17)

  }, [mousePos])

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