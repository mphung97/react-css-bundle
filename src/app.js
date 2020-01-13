import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo'

import './global.scss';

function App() {
  return (
    <div>
      <Demo>React CSS Module</Demo>
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);