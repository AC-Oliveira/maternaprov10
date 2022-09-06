import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import CadastroStack from './cadastroStack';
import ConsultaStack from './consultaStack';
import { Text } from 'react-native';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  'Cadastro Gestante': {
    screen: HomeStack,
  },
  'Perfil da Gestante': {
    screen: CadastroStack,
  },
  'Consulta Odonotológica': {
    screen: ConsultaStack,
  }
});

export default createAppContainer(RootDrawerNavigator);