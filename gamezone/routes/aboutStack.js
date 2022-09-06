import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Materna Pro' navigation={navigation} />
      }
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#4fc6e0',
    headerStyle: { backgroundColor: '#fff', height: 60 },
  }
});

export default AboutStack;