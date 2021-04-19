import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/themeContext'
import { AuthProvider } from './hooks/auth'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);