import React from 'react';
import RouterIndex from './router/index'
import './App.css';
import {Provider} from 'react-redux'
import store from './store/index'
import 'antd/lib/date-picker/style/css';
import './static/css/common.css'
import './static/font/iconfont.css'
function App() {
  return <Provider store={store}><RouterIndex /></Provider>
  
}

export default App;
