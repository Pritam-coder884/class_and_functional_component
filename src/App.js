import React from 'react'
import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionalComponent from './component/FunctionalComponent';
import Functional_counter from './component/Functional_counter';
import ClassCounter from './component/ClassCounter';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <br />
      <FunctionalComponent name="pritam" />
      <br />
      <br />
      <Functional_counter />
      <br />
      <br />
      <ClassCounter />
    </div>
  );
}

export default App;
