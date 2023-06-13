import * as type from "./typeActions";

const initState = { cart: [] };

export default function reducer(state = initState, action) {
  switch (action.type) {
    case type.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };

    case type.REMOVE_PRODUCT:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (product) => product.id !== parseInt(action.payload)
          ),
        ],
      };

    case type.INCREMENT_QNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (product.id === parseInt(action.payload)) {
              return { ...product, quantity: product.quantity + 1  };
            } else {
              return product
            }
          }),
        ],
      };

    case type.DECREMENT_QNT:
      return {
        ...state,
        cart: [
          ...state.cart.map((product) => {
            if (
              product.id === parseInt(action.payload) &&
              product.quantity > 1
            ) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product
            }
          }
          ),
        ],
      };

    case type.EMPTY_CART:
        return {...state, cart: []}

    default:
      return state;
  }
}
