const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

export const formatCurrency = number => currencyFormatter.format(number);

export const getCartItems = (order, products) => {
  return Object.entries(order).map(([key, val]) => ({
    product: products.find(p => p.id === key),
    amount: val
  }));
};

export const getCartTotal = cartItems => {
  return cartItems.reduce(
    (prev, curr) => prev + curr.product.price * curr.amount,
    0
  );
};
