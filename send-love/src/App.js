import React from 'react';
import './App.css';
import Boy from './pages/boy';
import Girl from './pages/girl';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Boy/>
        <Girl/>
      </div>
    </Provider>
  );
}

export default App;
