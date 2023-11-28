/* eslint-disable react/prop-types */

import TitleLetter from "./TitleLetter"

export default function Title({ title }) {
  return (
    <div
      style={{
        color: 'white',
        fontSize: 48,
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {title.split('').map((c, i) => {
        if (c === ' ') return <h1 key={i}>&nbsp;</h1>
        return (
          <TitleLetter key={i} letter={c} random={Math.random().toFixed(2)} />
        )
      })}
    </div>
  )
}