import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import App from "./app";
import './style/index.less'
 
root.render(<App   />);