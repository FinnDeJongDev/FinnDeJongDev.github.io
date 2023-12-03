import { useEffect, useRef, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import Emitter from "../services/Emitter";

export default function DarkenedCanvas() {
  const [flashLightMode, setFlashLightMode] = useState(false)
  const mousePos = useMousePosition()
  const canvasRef = useRef()

  useEffect(() => {
    console.log(canvasRef.current)
    let ctx = canvasRef.current.getContext('2d');

    // Set initial darkened canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    // Enable listener for cursor change
    Emitter.on("SET_CURSOR", (data) => {
      if (data) {
        setFlashLightMode(true);
      } else {
        setFlashLightMode(false);
      }
    })

    // Demount listener when page closed
    return () => {
      Emitter.off("SET_CURSOR");
    }

  }, [])

  useEffect(() => {
    let ctx = canvasRef.current.getContext('2d');

    if (flashLightMode) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw circle on canvas at mouse position
      ctx.beginPath();
      ctx.globalCompositeOperation = "xor";
      ctx.arc(mousePos.x, mousePos.y, 250, 0, 2 * Math.PI);
      ctx.fill()
    } else {
      // Draw blackscreen when flashlightmode is disabled
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

  }, [flashLightMode, mousePos])

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
      }}
    />
  )
}