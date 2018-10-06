import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = props => {
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
      <div className="header--cart">
        <div className="header--cart-button">
          <span className="header--cart-button_text">My Cart (1)</span>
          <i className="fa fa-angle-down" />
        </div>
        {false && (
          <div className="cart--dropdown">
            <div className="cart--product">
              <img
                className="cart--product-image"
                src="/media/hand-painted-blue-flat-dish.jpg"
                alt="hand-painted-blue-flat-dish"
              />
              <div className="cart--product-description">
                <div className="cart--product-title">
                  Hand Painted Blue Flat Dish
                  <span className="cart--product-quantity"> × 1</span>
                </div>
                <div className="cart--product-brand">Kiriko</div>
                <div className="cart--product-price">$28.00</div>
              </div>
              <div className="cart--product-action">
                <i className="fa fa-times" />
              </div>
            </div>
            <div className="cart--product">
              <img
                className="cart--product-image"
                src="/media/hand-painted-blue-flat-dish.jpg"
                alt="hand-painted-blue-flat-dish"
              />
              <div className="cart--product-description">
                <div className="cart--product-title">
                  Hand Painted Blue Flat Dish
                  <span className="cart--product-quantity"> × 1</span>
                </div>
                <div className="cart--product-brand">Kiriko</div>
                <div className="cart--product-price">$28.00</div>
              </div>
              <div className="cart--product-action">
                <i className="fa fa-times" />
              </div>
            </div>
            <div className="cart--dropdown-summary">
              <div>Total</div>
              <div>$28.00</div>
            </div>
            <div className="cart--dropdown-actions">
              <div className="cart--dropdown-button cart--dropdown-button_view-cart">
                View Cart
              </div>
              <div className="cart--dropdown-button cart--dropdown-button_checkout">
                Checkout
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
