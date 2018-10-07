import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './category.css';
import { formatCurrency } from '../../utils';
import { actions } from '../../actions';

export const ProductGridItem = ({ product, viewDetails, addToCart }) => (
  <div>
    <div
      className="category--item-image"
      style={{
        backgroundImage: `url(/media/${product.image})`
      }}
    >
      <div className="category--item-overlay">
        <div
          className="category--item-overlay_button"
          onClick={() => viewDetails(product.id)}
        >
          View Details
        </div>
        <div
          className="category--item-overlay_button"
          onClick={() => addToCart(product.id, 1)}
        >
          Add To Cart
        </div>
      </div>
    </div>
    <div className="category--item-brand">{product.brand}</div>
    <div className="category--item-title">{product.title}</div>
    <div className="category--item-price">{formatCurrency(product.price)}</div>
  </div>
);

export const Category = ({ category, products, history, addToCart }) => {
  return (
    <div>
      <div
        className="category--top"
        style={{
          backgroundImage: 'url(' + category.image + ')'
        }}
      >
        <div />
        <div className="category--top-center">
          <div className="category--top-center_title">{category.title}</div>
          <div className="category--top-center_description">
            {category.description}
          </div>
        </div>
        <div />
      </div>
      <div className="category--grid">
        {products.map(product => (
          <ProductGridItem
            key={product.id}
            product={product}
            viewDetails={id => history.push(`/product/${id}`)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    category: state.category,
    products: state.products
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
  )(Category)
);
