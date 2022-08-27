import React from 'react';
import ReactDOM from 'react-dom/client';
// This DOM library is what actually renders to the browser
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// To measure performance in app, refer to early git commit "prep for fresh start"