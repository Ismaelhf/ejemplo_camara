/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';

// import Camera from './src/Camera';
import Camera2 from './src/Camera2';
const App = () => {
  return (
    <>
      {/* <Camera /> */}
      <Camera2 />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
