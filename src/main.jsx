import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ShoppingCartContext from "./context/ShoppingCartContext.jsx";

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        <ShoppingCartContext>
            <App/>
        </ShoppingCartContext>
    </React.StrictMode>,
)
