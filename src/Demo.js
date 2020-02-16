import React from 'react';
/**
 * if config with eslint need disable https://eslint.org/docs/rules/no-unused-vars
 * when use a single css file import 'file.css';
 */

// [SCOPE LOCAL] custom css
import './demo.scss';

function Demo(props) {
  return (
    <div styleName="container bg-dark p-5">
      <h1 styleName="center color1">phphan</h1>
      <h1 styleName="right color2">phphan</h1>
      <h1 styleName="left color3">phphan</h1>
    </div>
  );
}

export default Demo;