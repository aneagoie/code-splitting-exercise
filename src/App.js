import React, { Component } from 'react';
import './App.css';

import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return <Page2 onRouteChange={this.onRouteChange} />
    } else {
      return <Page3 onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
