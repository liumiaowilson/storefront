import React from 'react';
import './cart.css';

const Cart = props => {
  return (
    <div className="cart">
      <div className="cart--title">Shopping Cart</div>
      <div className="cart--body">
        <div className="cart--body-content">
          <table className="cart--body-table">
            <thead>
              <tr>
                <th className="cart--body-table_header align-left">Product</th>
                <th className="cart--body-table_header align-center">
                  Quantity
                </th>
                <th className="cart--body-table_header align-center">Total</th>
                <th className="cart--body-table_header align-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart--body-table_row">
                  <div className="cart--body-table_item">
                    <img
                      className="cart--body-table_image"
                      src="/media/hand-painted-blue-flat-dish.jpg"
                      alt="hand-painted-blue-flat-dish"
                    />
                    <div className="cart--body-table_detail">
                      <div className="cart--body-table_brand">Kiriko</div>
                      <div className="cart--body-table_title">
                        Hand Painted Blue Flat Dish
                      </div>
                    </div>
                  </div>
                </td>
                <td className="cart--body-table_row align-top">
                  <div className="cart--body-table_item_grid">
                    <div className="cart--body-table_item_quantity">1</div>
                    <div className="cart--body-table_item_add">+</div>
                    <div className="cart--body-table_item_remove">-</div>
                  </div>
                </td>
                <td className="cart--body-table_row align-top">
                  <div className="cart--body-table_item_price">$28.00</div>
                </td>
                <td className="cart--body-table_row align-top">
                  <div className="cart--body-table_item_delete">×</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart--overview">
            <div className="cart--overview-section">
              <div className="cart--overview-label">Cart Overview</div>
              <div className="cart--overview-subtotal">
                <div className="cart--overview-subtotal_label">Subtotal</div>
                <div className="cart--overview-subtotal_value">$28.00</div>
              </div>
              <div className="cart--overview-total">
                <div className="cart--overview-total_label">Total</div>
                <div className="cart--overview-total_value">$28.00 CAD</div>
              </div>
            </div>
          </div>
          <div className="cart--actions">
            <div className="cart--button cart--button-continue_shopping">
              Continue Shopping
            </div>
            <div className="cart--button cart--button-checkout">
              Checkout ($28.00)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
