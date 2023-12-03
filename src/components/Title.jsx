import TitleLetter from "./TitleLetter";
import { useRef } from "react";

export default function Title({ title }) {
  const titleRef = useRef();

  return (
    <div
      ref={titleRef}
      style={{
        color: 'white',
        fontSize: 48,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'absolute',
      }}
    >
      {/* Create letter or space in for every character */}
      {title.split('').map((c, i) => {
        if (c === ' ') return <h1 key={i}>&nbsp;</h1>
        return (
          <TitleLetter key={i} letter={c} random={Math.random().toFixed(2)} />
        )
      })}
    </div>
  )
}