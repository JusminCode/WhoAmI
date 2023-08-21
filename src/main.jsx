import React from 'react'
import ReactDOM from 'react-dom/client'
import Overlay from "./Overlay.jsx";
import Social from "./Social.jsx";
import App from "./App.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App/>
        <Social/>
        <Overlay/>
    </React.StrictMode>,
)