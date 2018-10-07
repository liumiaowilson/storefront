import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './product.css';
import { actions } from '../../actions';
import { formatCurrency } from '../../utils';

export class ProductActions extends Component {
  state = {
    amount: 1
  };

  addItem = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  };

  removeItem = () => {
    if (this.state.amount > 1) {
      this.setState({
        amount: this.state.amount - 1
      });
    }
  };

  render() {
    const { addToCart } = this.props;
    const { amount } = this.state;

    return (
      <div className="product--info-actions_grid">
        <div className="product--info-quantity">{amount}</div>
        <div
          role="button"
          tabIndex="0"
          className="product--info-button_add"
          onClick={this.addItem}
        >
          +
        </div>
        <div
          role="button"
          tabIndex="0"
          className="product--info-button_remove"
          onClick={this.removeItem}
        >
          -
        </div>
        <div
          role="button"
          tabIndex="0"
          className="product--info-button_add-to-cart"
          onClick={() => addToCart(amount)}
        >
          Add To Cart
        </div>
      </div>
    );
  }
}

export const Product = ({ product, history, addToCart }) => {
  const addNewProduct = amount => {
    addToCart(product.id, amount);
    history.push('/cart');
  };

  return product ? (
    <div className="product">
      <div className="product--breadcrumbs">
        <span className="product--breadcrumbs-link">HOME</span> /{' '}
        <span className="product--breadcrumbs-link">plates</span> /{' '}
        <span className="product--breadcrumbs-link_active">
          {product.title}
        </span>
      </div>
      <div className="product--detail">
        <div className="product--image">
          <img alt={product.title} src={`/media/${product.image}`} />
        </div>
        <div className="product--info">
          <div className="product--info-brand">{product.brand}</div>
          <div className="product--info-title">{product.title}</div>
          <div className="product--info-price">
            {formatCurrency(product.price)}
          </div>
          <div className="product--info-description">{product.description}</div>
          <div className="product--info-actions">
            <ProductActions addToCart={addNewProduct} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const product = state.products.find(p => p.id === id);
  return {
    product
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: (productId, amount) =>
    dispatch(actions.addToCart(productId, amount))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)
);
