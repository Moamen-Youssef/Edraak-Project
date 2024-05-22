import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/App.css';
import {LanguageContext} from './contexts/LanguageContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageContext>
      <App />
    </LanguageContext>
  </React.StrictMode>
);
