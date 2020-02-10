export function addToCartRequest(id) {
  return {
    type: '@carrinho/ADD_REQUEST',
    payload: {
      id,
    },
  };
}

export function addToCartSuccess(produto) {
  return {
    type: '@carrinho/ADD_SUCCESS',
    payload: {
      produto,
    },
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@carrinho/UPDATE_AMOUNT_REQUEST',
    payload: {
      id,
      amount,
    },
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@carrinho/UPDATE_AMOUNT_SUCCESS',
    payload: {
      id,
      amount,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: '@carrinho/REMOVE',
    payload: {
      id,
    },
  };
}
