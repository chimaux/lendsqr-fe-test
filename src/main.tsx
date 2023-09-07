import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from './Context.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> 
      <GlobalContext>
    <App />
    </GlobalContext>
    </Router>
  </React.StrictMode>
);
