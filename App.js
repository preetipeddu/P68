import React from 'react';
import { View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import FacebookScreen from './FacebookScreen';
import InstagramScreen from './InstagramScreen';

export default function App() {
  return (
      <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator);


