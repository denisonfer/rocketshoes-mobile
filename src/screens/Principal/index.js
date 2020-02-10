import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Background from '../../components/background';
import api from '../../services/api';
import * as Actions from '../../store/modules/carrinho/actions';
import { valorFormatado } from '../../util/valorFormatado';
import {
  ListProducts,
  CardProduct,
  ImageProduct,
  TitleProduct,
  PriceProduct,
  ButtonAddToCart,
  BoxIcon,
  IconCart,
  QtdItemCarrinho,
  TextButton,
} from './styles';

class Principal extends Component {
  state = {
    produtos: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(produto => ({
      ...produto,
      valorFormatado: valorFormatado(produto.price),
    }));

    this.setState({ produtos: data });
  }

  handleAddtoCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { produtos } = this.state;
    const { itemCarrinho } = this.props;

    return (
      <Background>
        <ListProducts
          data={produtos}
          keyExtractor={produto => String(produto.id)}
          numColumns={2}
          renderItem={({ item: produto }) => (
            <CardProduct>
              <ImageProduct source={{ uri: produto.image }} />
              <TitleProduct>{produto.title}</TitleProduct>
              <PriceProduct>{produto.valorFormatado}</PriceProduct>

              <ButtonAddToCart onPress={() => this.handleAddtoCart(produto.id)}>
                <BoxIcon>
                  <IconCart name="cart-outline" size={26} />
                  <QtdItemCarrinho>
                    {itemCarrinho[produto.id] || 0}
                  </QtdItemCarrinho>
                </BoxIcon>

                <TextButton>Adicionar</TextButton>
              </ButtonAddToCart>
            </CardProduct>
          )}
        />
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  itemCarrinho: state.carrinho.produtos.reduce((amount, produto) => {
    amount[produto.id] = produto.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
