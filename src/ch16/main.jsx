import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from '@/ch16/store/store';
import { Provider } from 'react-redux';
import App from '@/ch16/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
