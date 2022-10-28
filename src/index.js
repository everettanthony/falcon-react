import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store/store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ScrollToTop from './app/hooks/ScrollToTop';
import App from './app/layout/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GoogleReCaptchaProvider
            reCaptchaKey="6LepwW0gAAAAACRopnMQCu_bKcj4g6qtAQcSH9eF">
            <ScrollToTop />
            <App />
          </GoogleReCaptchaProvider>
        </BrowserRouter>      
      </PersistGate>
    </Provider>
  </React.StrictMode>
);