import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, StyleSheet,Text} from 'react-native';
import MyStack from './navigation/navigationIndex';

const App = () => {
  return (
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});

export default App;
