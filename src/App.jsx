import './App.css'
import Title from './components/Title'
import Cursor from './components/Cursor'


function App() {


  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'none'
      }}
    >
      {/* Title */}
      <Title title="Finn de Jong" />
      {/* Cursor */}
      <Cursor />
    </div>
  )
}

export default App
