import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../ecrans/home';
import Quiz from '../ecrans/quiz';
import Result from '../ecrans/result';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>

      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>

    </Stack.Navigator>
  );
}

export default MyStack;