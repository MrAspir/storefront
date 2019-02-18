import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Category from "./Category/Category";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Category} />
                <Route path="/cart" component={Cart}/>
                <Route path="/product/:id" component={Product}/>
            </div>
        );
    }
}

export default App;
