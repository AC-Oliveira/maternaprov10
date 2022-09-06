import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Consulta from '../screens/consulta';

const screens = {
  Consulta: {
    screen: Consulta,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Consulta Odontológica' navigation={navigation} />
      }
    },
  },
}

const CadastroStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#4fc6e0',
    headerStyle: { backgroundColor: '#fff', height: 60 },
  }
});

export default CadastroStack;