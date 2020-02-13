import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export default function Principal() {
  const [produtos, setProdutos] = useState([]);
  const dispatch = useDispatch();

  async function loadProdutos() {
    const response = await api.get('/products');

    const data = response.data.map(produto => ({
      ...produto,
      valorFormatado: valorFormatado(produto.price),
    }));

    setProdutos(data);
  }

  const itemCarrinho = useSelector(state =>
    state.carrinho.produtos.reduce((amount, produto) => {
      amount[produto.id] = produto.amount;

      return amount;
    }, {})
  );

  useEffect(() => {
    loadProdutos();
  }, []);

  function handleAddtoCart(id) {
    dispatch(Actions.addToCartRequest(id));
  }

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

            <ButtonAddToCart onPress={() => handleAddtoCart(produto.id)}>
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
