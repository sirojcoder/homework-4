import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assest/style/style.css'
import Input from './componets/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   <Input />
  </React.StrictMode>
);

