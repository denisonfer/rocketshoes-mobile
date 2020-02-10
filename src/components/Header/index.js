import { Foundation } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Container, BoxHeader, Logo, Carrinho, ItemCount } from './styles';

function Header({ navigation, QtdCarrinho }) {
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
const mapStateToProps = state => ({
  QtdCarrinho: state.carrinho.produtos.length,
});

export default connect(mapStateToProps)(Header);
