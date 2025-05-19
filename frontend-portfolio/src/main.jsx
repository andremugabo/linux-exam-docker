import  React  from 'react'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client';
import {Provider} from 'react-redux';
import { store } from './redux/store'





ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
