import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import "./src/index"
import App from './src/App';



const container : any = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>); 
