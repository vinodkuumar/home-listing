import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
