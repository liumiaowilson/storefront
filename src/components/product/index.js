import React from 'react';
import './product.css';

const Product = props => {
  return (
    <div className="product">
      <div className="product--breadcrumbs">
        <span className="product--breadcrumbs-link">HOME</span> /{' '}
        <span className="product--breadcrumbs-link">plates</span> /{' '}
        <span className="product--breadcrumbs-link_active">
          Blue Stripe Stoneware Plate
        </span>
      </div>
      <div className="product--detail">
        <div className="product--image">
          <img
            alt="blue-stripe-stoneware-plate.jpg"
            src="/media/blue-stripe-stoneware-plate.jpg"
          />
        </div>
        <div className="product--info">
          <div className="product--info-brand">Kiriko</div>
          <div className="product--info-title">Blue Stripe Stoneware Plate</div>
          <div className="product--info-price">$40.00</div>
          <div className="product--info-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            purus pulvinar, placerat turpis ac, interdum metus. In eget massa
            sed enim hendrerit auctor a eget.
          </div>
          <div className="product--info-actions">
            <div className="product--info-actions_grid">
              <div className="product--info-quantity">1</div>
              <div className="product--info-button_add">+</div>
              <div className="product--info-button_remove">-</div>
              <div className="product--info-button_add-to-cart">
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
