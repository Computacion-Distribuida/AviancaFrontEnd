import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://9d838347f6fde361dcffda7866a65f7f@o4505780693106688.ingest.sentry.io/4505780694745088",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      // tracePropagationTargets: ["localhost", "https:app.salvit.com/", "https:staging.salvit.com/", "https:dev.salvit.com/"],
      // tracePropagationTargets: ["https:app.salvit.com/", "https:staging.salvit.com/", "https:dev.salvit.com/"],
    }),
    // new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});



Amplify.configure(awsconfig);

// Inicializar Google Analytics con tu código de seguimiento
ReactGA.initialize('G-59FT43FDCL');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);

