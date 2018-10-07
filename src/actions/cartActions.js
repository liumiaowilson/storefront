export const types = {
  ADD_TO_CART: 'Cart_AddToCart',
  REMOVE_FROM_CART: 'Cart_RemoveFromCart',
  TOGGLE_CART: 'Cart_ToggleCart'
};

export const actions = {
  addToCart: (productId, amount) => ({
    type: types.ADD_TO_CART,
    productId,
    amount
  }),

  removeFromCart: (productId, amount) => ({
    type: types.REMOVE_FROM_CART,
    productId,
    amount
  }),

  toggleCart: isOpen => ({
    type: types.TOGGLE_CART,
    isOpen
  })
};
