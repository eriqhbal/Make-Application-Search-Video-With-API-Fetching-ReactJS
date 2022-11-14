import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const elementRoot = document.getElementById('root');
const root = createRoot(elementRoot);
root.render(<App/>);
