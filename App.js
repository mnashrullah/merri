/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import jobReducer from './store/reducer/jobs';
import JobsNavigator from './navigation/JobsNavigator';

const rootReducer = combineReducers({
  jobs: jobReducer
});

const store = createStore(rootReducer);

export default function App() {
  return <Provider store={store}>
    <JobsNavigator />
  </Provider>
}



