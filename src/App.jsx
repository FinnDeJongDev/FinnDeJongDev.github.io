import Title from './components/Title';
import Cursor from './components/Cursor';
import Background from './components/Background';
import DarkenedCanvas from './components/DarkenedCanvas';
import BackgroundSupportText from './components/BackgroundItems/BackgroundSupportText';
import Breakpoints from './config/Breakpoints.config';
import useWindowSize from './hooks/useWindowSize';



function App() {
  const size = useWindowSize();


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
      {
        size.width < Breakpoints.desktop.width
          ? (null)
          : (
            <>
              {/* Links */}
              < Background />
              {/* Info text  */}
              < BackgroundSupportText />
              {/* Scratch canvas */}
              < DarkenedCanvas />
              {/* Title */}
              < Title title="Finn de Jong" />
              {/* Cursor */}
              <Cursor />
            </>
          )
      }
    </div>
  )
}

export default App
