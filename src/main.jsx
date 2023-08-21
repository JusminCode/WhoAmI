import React from 'react'
import ReactDOM from 'react-dom/client'
import Overlay from "./Overlay.jsx";
import Social from "./Social.jsx";
import App from "./App.jsx";
import './index.css'
import Club from "./Club.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Club/>
        <App/>
        <Social/>
        <Overlay/>
    </React.StrictMode>,
)