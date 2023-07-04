import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './Stack';
export default function Root() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
