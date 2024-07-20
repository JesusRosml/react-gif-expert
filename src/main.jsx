import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './output.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    //EL StrictMode solo se debe usar en desarrollo
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
)