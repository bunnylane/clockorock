import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <App instance={msalInstance} />
    </React.StrictMode>
);

