import React, { Component } from 'react';
import Content from './comps/Content';
import { mapScript } from './utils/map';
import "./App.css"

class App extends Component {
  componentDidMount(){
    mapScript();
  }

  render() { 
    return (
      <>
        <Content />
      </>
    )

  }
}
 
export default App;
