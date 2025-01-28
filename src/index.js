import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";


import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.min.css';


// Создайте корень приложения с помощью createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);