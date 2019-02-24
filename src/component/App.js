import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import config from '../config';

import localStorage from '../service/LocalStorage';

import Cart from './Cart/Cart';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Product from './Product/Product';
import Page404 from './Error/Page404';

const { routs } = config;

class App extends Component {
    state = {
        cart: localStorage.load('cart') || []
    };

    isFindItem = item => this.state.cart.find(cartItem => cartItem.id === item.id);

    updateCart = (item) => {
        if (this.isFindItem(item)) {
            return this.setState({
                cart: this.state.cart.map(cartItem => (
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + item.quantity
                        }
                        : cartItem
                ))
            });
        }

        return this.setState({
            cart: [
                ...this.state.cart,
                item
            ]
        });
    };

    updateCartItemQuantity = (id, quantity) => (
        this.setState({
            cart: this.state.cart.map(item => (
                item.id === id
                    ? {
                        ...item,
                        quantity
                    }
                    : item
            ))
        })
    );

    removeCartItem = id => (
        this.setState({
            cart: this.state.cart.filter(item => item.id !== id)
        })
    );

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.save('cart', nextState.cart);
    }

    render() {
        return (
            <div className="App">
                <Header cart={this.state.cart} onRemoveCartItem={id => this.removeCartItem(id)} />

                <div className="App__main">
                    <Switch>
                        <Redirect exact from={routs.homepage} to={routs.category} />

                        <Route path={routs.category} render={props =>(
                           <Category {...props} onUpdateCart={item => this.updateCart(item)} />
                        )} />

                        <Route path={routs.product} render={props => (
                            <Product {...props} onUpdateCart={item => this.updateCart(item)} />
                        )} />

                        <Route path={routs.cart} render={props => (
                            <Cart
                                {...props}
                                cart={this.state.cart}
                                onUpdateCartItemQuantity={(id, quantity) => this.updateCartItemQuantity(id, quantity)}
                                onRemoveCartItem={id => this.removeCartItem(id)}
                            />
                        )} />

                        <Route component={Page404}/>
                    </Switch>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
