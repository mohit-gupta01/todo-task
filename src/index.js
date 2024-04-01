import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Provider from react-redux for providing Redux store
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate for persisting Redux store
import { persistStore } from 'redux-persist'; // persistStore for creating the Redux persistor
import store from './redux/app/store'; // Importing Redux store

// Create Redux persistor
const persistor = persistStore(store);

// Create React root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within React strict mode
root.render(
  <React.StrictMode>
    {/* Provide Redux store to the application */}
    <Provider store={store}>
      {/* Enable persistence for the Redux store */}
      <PersistGate persistor={persistor}>
        {/* Render the main application component */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
