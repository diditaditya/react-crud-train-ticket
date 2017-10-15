import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import TopNav from './components/Nav/TopNav';
import Routing from './route/Routes';

import store from './store/configureStore';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <Routing />
        </div>
      </BrowserRouter>
    );
  }
}

const AppWithProvider = () => {
  return (
    <Provider store={store} >
      <App/>
    </Provider>
  )
} 

export default AppWithProvider;
