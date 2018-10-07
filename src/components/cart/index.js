import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './cart.css';
import { formatCurrency } from '../../utils';
import { actions } from '../../actions';
import { getCartItems, getCartTotal } from '../../utils';

export const CartRow = ({
  product,
  amount,
  addItem,
  removeItem,
  removeAllItems
}) => (
  <tr>
    <td className="cart--body-table_row">
      <div className="cart--body-table_item">
        <img
          className="cart--body-table_image"
          src={`/media/${product.image}`}
          alt={product.title}
        />
        <div className="cart--body-table_detail">
          <div className="cart--body-table_brand">{product.brand}</div>
          <div className="cart--body-table_title">{product.title}</div>
        </div>
      </div>
    </td>
    <td className="cart--body-table_row align-top">
      <div className="cart--body-table_item_grid">
        <div className="cart--body-table_item_quantity">{amount}</div>
        <div className="cart--body-table_item_add" onClick={addItem}>
          +
        </div>
        <div className="cart--body-table_item_remove" onClick={removeItem}>
          -
        </div>
      </div>
    </td>
    <td className="cart--body-table_row align-top">
      <div className="cart--body-table_item_price">
        {formatCurrency(product.price)}
      </div>
    </td>
    <td className="cart--body-table_row align-top">
      <div className="cart--body-table_item_delete">
        <div className="cart--body-button_delete" onClick={removeAllItems}>
          ×
        </div>
      </div>
    </td>
  </tr>
);

export const CartOverview = ({ total }) => (
  <div className="cart--overview">
    <div className="cart--overview-section">
      <div className="cart--overview-label">Cart Overview</div>
      <div className="cart--overview-subtotal">
        <div className="cart--overview-subtotal_label">Subtotal</div>
        <div className="cart--overview-subtotal_value">
          {formatCurrency(total)}
        </div>
      </div>
      <div className="cart--overview-total">
        <div className="cart--overview-total_label">Total</div>
        <div className="cart--overview-total_value">
          {formatCurrency(total)} CAD
        </div>
      </div>
    </div>
  </div>
);

export const CartTable = ({ cart, addToCart, removeFromCart }) => (
  <table className="cart--body-table">
    <thead>
      <tr>
        <th className="cart--body-table_header align-left">Product</th>
        <th className="cart--body-table_header align-center">Quantity</th>
        <th className="cart--body-table_header align-center">Total</th>
        <th className="cart--body-table_header align-right">Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(item => (
        <CartRow
          key={item.product.id}
          product={item.product}
          amount={item.amount}
          addItem={() => addToCart(item.product.id, 1)}
          removeItem={() => removeFromCart(item.product.id, 1)}
          removeAllItems={() => removeFromCart(item.product.id, item.amount)}
        />
      ))}
    </tbody>
  </table>
);

export const CartActions = ({ total, continueShopping }) => (
  <div className="cart--actions">
    <div
      className="cart--button cart--button-continue_shopping"
      onClick={continueShopping}
    >
      Continue Shopping
    </div>
    <div className="cart--button cart--button-checkout">
      Checkout ({formatCurrency(total)})
    </div>
  </div>
);

export const Cart = ({ cart, total, history, addToCart, removeFromCart }) => {
  return (
    <div className="cart">
      <div className="cart--title">Shopping Cart</div>
      <div className="cart--body">
        <div className="cart--body-content">
          <CartTable
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
          <CartOverview total={total} />
          <CartActions
            total={total}
            continueShopping={() => history.push('/')}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const cart = getCartItems(state.cart, state.products);
  const total = getCartTotal(cart);
  return {
    cart,
    total
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: (productId, amount) =>
    dispatch(actions.addToCart(productId, amount)),
  removeFromCart: (productId, amount) =>
    dispatch(actions.removeFromCart(productId, amount))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
