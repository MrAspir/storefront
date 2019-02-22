import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import localStorage from '../service/LocalStorage';

import Header from './Header/Header';
import Category from './Category/Category';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import Footer from './Footer/Footer';

class App extends Component {
    state = {
        cart: localStorage.load('cart') ? localStorage.load('cart') : []
    };

    updateCart = (item) => {
        if (this.state.cart.find(cartItem => cartItem.id === item.id)) {
            return this.setState({
                cart: this.state.cart.map(cartItem => cartItem.id === item.id ?
                    { ...cartItem, quantity: cartItem.quantity + item.quantity } :
                    cartItem)
            });
        }

        this.setState({
            cart: [ ...this.state.cart, item ]
        });
    };

    removeCartItem = (id) => {
        this.setState({
            cart: this.state.cart.filter(item => item.id !== id)
        });
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.save('cart', nextState.cart);
    }

    render() {
        return (
            <div className="App">
                <Header cart={this.state.cart} onRemoveCartItem={(id) => this.removeCartItem(id)} />

                <div className="App__main">
                    <Switch>
                        <Route exact path="/" render={props =>(
                           <Category {...props} onUpdateCart={(item) => this.updateCart(item)} />
                        )} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/product/:id" render={props => (
                            <Product {...props} onUpdateCart={(item) => this.updateCart(item)} />
                        )} />
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
