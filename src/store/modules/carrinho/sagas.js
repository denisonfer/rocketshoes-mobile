import { Alert } from 'react-native';
import { call, put, all, select, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { valorFormatado } from '../../../util/valorFormatado';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ payload }) {
  const productExists = yield select(state =>
    state.carrinho.produtos.find(p => p.id === payload.id)
  );

  const stock = yield call(api.get, `/stock/${payload.id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(payload.id, amount));
  } else {
    const response = yield call(api.get, `/products/${payload.id}`);

    const data = {
      ...response.data,
      amount: 1,
      valorFormatado: valorFormatado(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ payload }) {
  if (payload.amount <= 0) return;

  const stock = yield call(api.get, `/stock/${payload.id}`);
  const stockAmount = stock.data.amount;

  if (payload.amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(payload.id, payload.amount));
}

export default all([
  takeLatest('@carrinho/ADD_REQUEST', addToCart),
  takeLatest('@carrinho/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
