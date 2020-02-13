import { Foundation } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, BoxHeader, Logo, Carrinho, ItemCount } from './styles';

export default function Header({ navigation }) {
  const QtdCarrinho = useSelector(state => state.carrinho.produtos.length);

  return (
    <Container>
      <BoxHeader>
        <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
          <Logo />
        </TouchableOpacity>

        <Carrinho onPress={() => navigation.navigate('Carrinho')}>
          <Foundation name="shopping-cart" size={24} color="#fff" />
          <ItemCount>{QtdCarrinho}</ItemCount>
        </Carrinho>
      </BoxHeader>
    </Container>
  );
}
