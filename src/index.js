import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import { HashRouter } from "react-router-dom";
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
  </HashRouter>
);
