import banner from './banner.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="http://northstarslax.com/"
          // target="_blank"
          rel="noopener noreferrer"
        >
        <img src={banner} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
