import React, { Component } from 'react';
import Content from './comps/Content';
import Search from './comps/Search';
import { mapScript } from './utils/map';
import "./App.css"
import bus from "./assets/front-of-bus.png"

class App extends Component {
  componentDidMount(){
    mapScript();
  }

  render() { 
    return (
      <>
        <Content />
      </>
    );
  }
}
 
export default App;
