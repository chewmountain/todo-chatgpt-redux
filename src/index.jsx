import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./store/todoSlice";
import themeReducer from './store/themeSlice';

import App from './App';
import './index.css';

const store = configureStore({
    reducer: {
      todos: todoReducer,
      theme: themeReducer,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
)
