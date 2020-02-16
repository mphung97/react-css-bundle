import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo'

/**
 * scope global, I recommended use the reset css like 
 * https://github.com/necolas/normalize.css/blob/master/normalize.css 
 */
// import './global.scss';

function App() {
  return (
    <div>
      <Demo>React CSS Module</Demo>
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);