import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './store';

import { theme } from '~/theme';
import App from './App';

console.disableYellowBox = true;

// Fix network debugging layer on Android
if (Platform.OS === 'ios') {
  global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;

  global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;
}

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
