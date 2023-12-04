

export default function MobileTitleLetter(props) {
  return (
    <h1
      style={{
        margin: 0,
        marginTop: -10,
        paddingTop: props.subTitle ? 0 : 10,
        paddingBottom: props.subTitle ? 10 : 0,
        fontSize: props.fontSize,
        animationName: props.title ? 'top-wave' : 'bottom-wave',
        animationIterationCount: 'infinite',
        animationDelay: `${props.itteration * 100}ms`,
        animationDuration: '1s'
      }}
    >
      {props.letter}
    </h1>
  )
}