import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { store, persistor } from './app/store';
import reportWebVitals from './reportWebVitals';
import { resources } from './i18n';
import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import LoaderBackdrop from './features/Loader/Loader';
const container = document.getElementById('root')!;

const root = createRoot(container);

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <LoaderBackdrop />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
