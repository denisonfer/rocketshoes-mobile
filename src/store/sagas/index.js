import { all } from 'redux-saga/effects';

import carrinho from '../modules/carrinho/sagas';

export default function* rootSaga() {
  yield all([carrinho]);
}
