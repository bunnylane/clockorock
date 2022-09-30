import logo from './logo.svg';
import './App.css';
import { PublicClientApplication } from '@azure/msal-browser';

const App = ({ authentication: auth }: { authentication: PublicClientApplication }) => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit yo <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Reactd
      </a>
    </header>
  </div>
};

export default App;