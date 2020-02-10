import React from 'react';
import { StatusBar } from 'react-native';
import './src/config/reactotronConfig';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import store from './src/store';

console.disableYellowBox = true;

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
