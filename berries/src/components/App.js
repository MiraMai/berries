import React, { Component } from 'react';
import '../App.css';
import TabComponent from './tab-component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Berry num num..
          </h1>
        </div>
        <TabComponent />
      </div>

    );
  }
}

export default App;

