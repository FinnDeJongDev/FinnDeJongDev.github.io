import MobileTitleLetter from "./MobileTitleLetter"

export default function MobileTitle({ title, subTitle }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'absolute',
        height: 220,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {
          title.split('').map((c, i) => {
            return (
              <MobileTitleLetter
                title
                fontSize='4.5rem'
                key={i}
                letter={c}
                itteration={i}
              />
            )
          })
        }
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {
          subTitle.split('').map((c, i) => {
            if (c === ' ') return <h1 key={i}>&nbsp;</h1>
            return (
              <MobileTitleLetter
                subTitle
                fontSize='3.5rem'
                key={i}
                letter={c}
                itteration={i}
              />
            )
          })
        }
      </div>
    </div>
  )
}