import { formatCurrency, getCartItems, getCartTotal } from '../index';

describe('Utils', () => {
  it('should get correct cart items', () => {
    const order = { '1': 1 };
    const products = [
      {
        id: '1',
        title: 'Test Product',
        brand: 'Test Brand',
        image: 'test.jpg',
        description: 'A test product',
        price: 30
      }
    ];
    const cartItems = getCartItems(order, products);
    expect(cartItems).toEqual([
      {
        product: {
          id: '1',
          title: 'Test Product',
          brand: 'Test Brand',
          image: 'test.jpg',
          description: 'A test product',
          price: 30
        },
        amount: 1
      }
    ]);
  });

  it('should get correct total', () => {
    const cartItems = [
      {
        product: {
          id: '1',
          title: 'Test Product',
          brand: 'Test Brand',
          image: 'test.jpg',
          description: 'A test product',
          price: 30
        },
        amount: 2
      }
    ];
    const total = getCartTotal(cartItems);
    expect(total).toEqual(60);
  });

  it('should format currency', () => {
    const number = 30;
    const formattedNumber = formatCurrency(number);
    expect(formattedNumber).toEqual('$30.00');
  });
});
