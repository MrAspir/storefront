import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from './CartItem/CartItem';

class Cart extends Component {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired,
        onUpdateCartItemQuantity: PropTypes.func.isRequired,
        onRemoveCartItem: PropTypes.func.isRequired
    };

    itemRender = () => {
        const { cart, onUpdateCartItemQuantity, onRemoveCartItem } = this.props;

        if (!cart.length) {
            return (
                <tr>
                    <td colSpan="4" className="Cart__empty">Cart's empty</td>
                </tr>
            )
        }

        return cart.map(item => (
            <CartItem
                key={item.id}
                { ...item }
                onUpdateCartItemQuantity={(id, quantity) => onUpdateCartItemQuantity(id, quantity)}
                onRemoveCartItem={() => onRemoveCartItem(item.id)}
            />
        ));
    };

    totalPrice = () => this.props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    render() {
        return (
            <div className="Cart">
                <div className="Cart__header">
                    <h2 className="Cart__title">Shopping Cart</h2>
                </div>

                <div className="Cart__container">
                    <table className="Cart__table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.itemRender()}
                        </tbody>
                    </table>

                    <div className="Cart__total">
                        <div className="Cart__total-content">
                            <div className="Cart__total-title">Cart overview</div>

                            <div className="Cart__total-item">
                                <div className="Cart__total-item-title">Subtotal</div>
                                <div className="Cart__total-item-value">${this.totalPrice().toFixed(2)}</div>
                            </div>

                            <div className="Cart__total-item">
                                <div className="Cart__total-item-title">Subtotal</div>
                                <div className="Cart__total-item-value Cart__total-item-value--cad">${this.totalPrice().toFixed(2)} CAD</div>
                            </div>
                        </div>
                    </div>

                    <div className="Cart__bottom">
                        <Link className="Cart__link" to="/">Continue shopping</Link>
                        <button className="Cart__button">Checkout (${this.totalPrice().toFixed(2)})</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
