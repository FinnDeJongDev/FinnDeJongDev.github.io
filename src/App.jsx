import Title from './components/Title';
import Cursor from './components/Cursor';
import Background from './components/Background';
import DarkenedCanvas from './components/DarkenedCanvas';
import BackgroundSupportText from './components/BackgroundItems/BackgroundSupportText';


function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Links */}
      <Background />
      {/* Info text  */}
      <BackgroundSupportText />
      {/* Scratch canvas */}
      <DarkenedCanvas />
      {/* Title */}
      <Title title="Finn de Jong" />
      {/* Cursor */}
      <Cursor />
    </div>
  )
}

export default App
