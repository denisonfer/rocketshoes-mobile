import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Carrinho from './screens/Carrinho';
import Principal from './screens/Principal';

const navegacao = createStackNavigator(
  {
    Principal,
    Carrinho,
  },
  {
    initialRouteName: 'Principal',
    defaultNavigationOptions: {
      header: navigation => <Header {...navigation} />,
    },
  }
);

const Routes = createAppContainer(navegacao);

export default Routes;
