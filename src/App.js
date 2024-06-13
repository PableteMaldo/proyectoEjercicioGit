import logo from './nyanCat.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>
        Bienvenidos a mi pagina!!!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />

        
        <p>
        “Esta es la mejor pagina web del siglo XXI”
        </p>

        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <a
          className="App-link"
          href="https://www.netflix.com/browse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netflix
        </a>
      </header>
    </div>
  );
}

export default App;
