import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import { actions } from '../../actions';
import { withRouter } from 'react-router-dom';
import { formatCurrency } from '../../utils';

const HeaderCartItem = ({ product, amount, removeAllFromCart }) => (
  <div className="cart--product">
    <img
      className="cart--product-image"
      src={`/media/${product.image}`}
      alt={product.title}
    />
    <div className="cart--product-description">
      <div className="cart--product-title">
        {product.title}
        <span className="cart--product-quantity"> × {amount}</span>
      </div>
      <div className="cart--product-brand">{product.brand}</div>
      <div className="cart--product-price">{formatCurrency(product.price)}</div>
    </div>
    <div className="cart--product-action">
      <div className="cart--product-action_remove">
        <i className="fa fa-times" onClick={removeAllFromCart} />
      </div>
    </div>
  </div>
);

const HeaderCart = ({
  cart,
  total,
  isCartOpen,
  toggleCart,
  removeFromCart,
  viewCart,
  checkout
}) => (
  <div className="header--cart">
    <div className="header--cart-button" onClick={() => toggleCart(true)}>
      <span className="header--cart-button_text">
        My Cart ({Object.keys(cart).length})
      </span>
      <i className="fa fa-angle-down" />
    </div>
    {isCartOpen && [
      <div className="cart--dropdown" key="dropdown">
        {cart.map(item => (
          <HeaderCartItem
            key={item.product.id}
            product={item.product}
            amount={item.amount}
            removeAllFromCart={() =>
              removeFromCart(item.product.id, item.amount)
            }
          />
        ))}
        <div className="cart--dropdown-summary">
          <div>Total</div>
          <div>{formatCurrency(total)}</div>
        </div>
        <div className="cart--dropdown-actions">
          <div
            className="cart--dropdown-button cart--dropdown-button_view-cart"
            onClick={viewCart}
          >
            View Cart
          </div>
          <div
            className="cart--dropdown-button cart--dropdown-button_checkout"
            onClick={checkout}
          >
            Checkout
          </div>
        </div>
      </div>,
      <div
        className="cart--dropdown-background"
        key="background"
        onClick={() => toggleCart(false)}
      />
    ]}
  </div>
);

const Header = ({
  cart,
  total,
  history,
  isCartOpen,
  toggleCart,
  removeFromCart
}) => {
  const viewCart = () => {
    history.push('/cart');
    toggleCart(false);
  };

  const checkout = () => {
    toggleCart(false);
  };

  return (
    <header className="header">
      <div className="header--logo">
        <img alt="Hero" src="../media/logo.png" />
      </div>
      <nav className="header--nav">
        <Link to="/home">
          <div className="header--nav-menu">Home</div>
        </Link>
        <Link to="/shop">
          <div className="header--nav-menu">
            Shop <i className="fa fa-angle-down" />
          </div>
        </Link>
        <Link to="/journal">
          <div className="header--nav-menu">Journal</div>
        </Link>
        <Link to="/more">
          <div className="header--nav-menu">
            More <i className="fa fa-angle-down" />
          </div>
        </Link>
      </nav>
      <HeaderCart
        cart={cart}
        total={total}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        removeFromCart={removeFromCart}
        viewCart={viewCart}
        checkout={checkout}
      />
    </header>
  );
};

const mapStateToProps = (state, ownProps) => {
  const cart = Object.entries(state.cart).map(([key, val]) => ({
    product: state.products.find(p => p.id === key),
    amount: val
  }));
  const total = cart.reduce(
    (prev, curr) => prev + curr.product.price * curr.amount,
    0
  );
  return {
    cart,
    total,
    isCartOpen: state.isCartOpen
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCart: isOpen => dispatch(actions.toggleCart(isOpen)),
  removeFromCart: (productId, amount) =>
    dispatch(actions.removeFromCart(productId, amount))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
