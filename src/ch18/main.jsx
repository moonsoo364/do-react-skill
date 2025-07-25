import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@/App';
import rootReducer from '@/ch18/modules/index';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
// import loggerMiddleware from '@/ch18/lib/loggerMiddleware';
// import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = configureStore({
  reducer: rootReducer,
  middleware: middleWare => middleWare().concat(logger)
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
