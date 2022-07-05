import React from 'react';
import './App.css';
import store from './store';
import ComA from './pages/ComA';
import ComB from './pages/ComB';
// 利用Provider组件包裹我们的结构，从而达到同意维护store的效果
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA/>
        <ComB/>
      </div>
    </Provider>
  );
}

export default App;
