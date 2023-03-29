import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from './features/modeSlice'

function App() {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const handleMode = () => {
    dispatch(toggleMode())
  }

  return (
    <div style={{ backgroundColor: mode.color1, color: `${mode.darkMode ? 'white' : 'black'}`, margin: '10px', padding: '10px' }} className="App">
      <Nav mode={mode} />
      <button onClick={() => handleMode()} style={{margin: "20px 0"}}>{mode.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <ContentWrapper mode={mode} />
      <Footer mode={mode} />
    </div>
  );
}

export default App;
