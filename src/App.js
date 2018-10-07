import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Category from './components/category';
import Product from './components/product';
import Cart from './components/cart';
import './App.css';
import { actions } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getCategory();
    this.props.getProducts();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/product/:id" component={Product} />
              <Route path="/category/:id" component={Category} />
              <Route path="/cart" component={Cart} />
              <Route>
                <Redirect to="/category/plates" />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getCategory: () => dispatch(actions.getCategory('plates')),
  getProducts: () => dispatch(actions.getProducts('plates'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
