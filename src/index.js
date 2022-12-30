import React from 'react';
// This DOM library is what actually renders to the browser
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // this strict mode naturally makes poor useEffects occur multiple times !!!
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// To measure performance in app... (refer to early git commit "prep for fresh start")