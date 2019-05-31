import React from 'react';
import {Provider,connect} from 'react-redux';
import {render} from 'react-dom';
import store from './store/store';
import router from './Component/Router/router';
// import './App.scss';
import './sy/Style.less';
// import './sy/index.scss';

function App() {
  return (
    <Provider store={store}>
      {router}
    </Provider>
  );
}

export default App;
