import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import Category from './Category/Category';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <div className="App__main">
                    <Route exact path="/" component={Category} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/product/:id" component={Product}/>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
