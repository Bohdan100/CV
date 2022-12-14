import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'constants';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'constants';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
