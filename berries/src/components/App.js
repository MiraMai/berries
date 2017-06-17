import React, { Component } from 'react';
import '../App.css';
import TabContainer from './tab-container';


class App extends Component {
  render() {
    return (
      <div className='center'>
        <div className="App-header">
          <h1>
            Berry num num..
          </h1>
        </div>
        <TabContainer />
      </div>

    );
  }
}

export default App;

