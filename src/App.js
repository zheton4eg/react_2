import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Git
        </h1>
        <a
          className="App-link"
          href="https://git-scm.com/book/en/v2"

          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Git
        </a>
      </header>
    </div>
  );
}

export default App;
