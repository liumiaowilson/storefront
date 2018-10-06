import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import Category from './components/category';
import Product from './components/product';
import Cart from './components/cart';
import './App.css';

class App extends Component {
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

export default App;
