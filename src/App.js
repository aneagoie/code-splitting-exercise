import React, { Component, Suspense, lazy } from 'react';
import './App.css';

import Page1 from './Components/Page1';
const Page2 = React.lazy(() => import('./Components/Page2'));
const Page3 = React.lazy(() => import('./Components/Page3'));
// Adding React.Lazy

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
      return (
      	<Suspense fallback={<div>Loading...</div>}>
      		<Page2 onRouteChange={this.onRouteChange} />
      	</Suspense>
    	)
    } else {
      return (
      	<Suspense fallback={<div>Loading...</div>}>
      		<Page3 onRouteChange={this.onRouteChange} />
      	</Suspense>
      	)
    }
  }
}

export default App;
