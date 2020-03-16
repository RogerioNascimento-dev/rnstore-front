import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import GlobalStyles from './styles/global';
import Router from './routes';
import Header from './components/Header';
import {Provider} from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <Router/>
          <GlobalStyles/>
          <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
