import React, { Fragment } from "react";
import './App.css';

//components

import InputWork from "./components/inputWork";
import ListWork from "./components/listWork";


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputWork />
        <ListWork />
      </div>
    </Fragment>
  )
}

export default App;
