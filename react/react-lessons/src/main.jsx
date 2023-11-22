
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';

const rootEl = document.getElementById("root");

const root = createRoot(rootEl);

//console.log( root );


root.render(
    <StrictMode> <App /> </StrictMode>
);


//jsx


const Deneme = () => { }

const Testing = function () { };


