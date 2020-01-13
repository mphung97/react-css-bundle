import React from 'react';
import demo from './demo.scss';
import demo1 from './demo1.scss';
import bootstrap from './bootstrap.css';

function Demo(props) {
  return (
    <>
      <h1 styleName="demo1.center demo.color1">phphan</h1>
      <h1 styleName="demo1.right demo.color2">phphan</h1>
      <h1 styleName="demo1.left demo.color3">phphan</h1>
    </>
  );
}

export default Demo;