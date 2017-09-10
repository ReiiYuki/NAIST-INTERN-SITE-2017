import React, { Component } from 'react';
import Nav from './Nav'
import IntroContent from './IntroContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
				<IntroContent/>
      </div>
    );
  }
}

export default App;
