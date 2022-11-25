import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from './App.js'
import { Circle } from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Damn! What a button!</h1>
    <p>Clicked: x times</p>
    <Button text='Press to change color'/>
    <Circle/>
    <Circle/>
  </>
);
