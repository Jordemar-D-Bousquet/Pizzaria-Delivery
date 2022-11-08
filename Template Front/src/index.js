import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './Global.styled';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CssBaseline />
        <GlobalStyle />
        <App />
        <Footer/>
    </React.StrictMode>
);
