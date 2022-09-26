import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
    <React.StrictMode>
        <App instance={msalInstance} />
    </React.StrictMode>,
    document.getElementById('root')
);