import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

function App() {
  return (
    <div>
      <h1 styleName="css1">React CSS Module</h1>
      <h1 styleName="css2">React CSS Module</h1>
      <h1 styleName="css3">React CSS Module</h1>
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);