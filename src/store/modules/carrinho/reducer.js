import { produce } from 'immer';

const initialState = {
  produtos: [],
};

export default function carrinho(state = initialState, action) {
  switch (action.type) {
    case '@carrinho/ADD_SUCCESS':
      return produce(state, draft => {
        const { produto } = action.payload;

        draft.produtos.push(produto);
      });

    case '@carrinho/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const produtoIndex = draft.produtos.findIndex(
          p => p.id === action.payload.id
        );

        if (produtoIndex >= 0) {
          draft.produtos[produtoIndex].amount = Number(action.payload.amount);
        }
      });
    }

    case '@carrinho/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.produtos.findIndex(
          p => p.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.produtos.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
