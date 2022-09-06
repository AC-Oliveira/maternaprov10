import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Cadastro from '../screens/cadastro';
// import About from '../screens/about';

const screens = {
  Cadastro: {
    screen: Cadastro,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Dados Pessoais' navigation={navigation} />
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