import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import CartWidgetItem from './CartWidgetItem/CartWidgetItem';

class CartWidget extends Component {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired,
        onRemoveCartItem: PropTypes.func.isRequired
    };

    state = {
        dropIsShow: false
    };

    dropShow = () => this.setState({ dropIsShow: true });
    dropHide = () => this.setState({ dropIsShow: false });
    dropToggle = () => this.state.dropIsShow ? this.dropHide() : this.dropShow();
    totalQuantity = () => this.props.cart.reduce((sum, item) => sum + item.quantity, 0);
    totalPrice = () => this.props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setWrapperRef = node => this.wrapperRef = node;

    handleClickOutside = (event) => {
        const { wrapperRef } = this;

        if (this.state.dropIsShow) {
            if (wrapperRef && !wrapperRef.contains(event.target)) {
                return this.dropHide();
            }
        }
    };

    itemRender = () => {
        const { cart, onRemoveCartItem } = this.props;

        if (!cart.length) {
            return <p>Cart's empty</p>
        }

        return cart.map(item => (
            <CartWidgetItem
                key={item.id}
                { ...item }
                onRemoveCartItem={() => onRemoveCartItem(item.id)}
            />
        ));
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        return (
            <div className="CartWidget" ref={this.setWrapperRef}>
                <button className="CartWidget__button" onClick={this.dropToggle}>My Cart ({this.totalQuantity()})</button>

                <div className={`CartWidget__drop ${this.state.dropIsShow ? 'show' : ''}`}>
                    <div className="CartWidget__drop-content">
                        {this.itemRender()}
                    </div>

                    <div className="CartWidget__drop-total">
                        <div className="CartWidget__drop-total-title">Total</div>

                        <div className="CartWidget__drop-total-price">
                            ${this.totalPrice().toFixed(2)}
                        </div>
                    </div>

                    <div className="CartWidget__drop-bottom">
                        <Link className="CartWidget__drop-button CartWidget__drop-button--view-cart" to={'/cart'}>
                            View cart
                        </Link>

                        <button className="CartWidget__drop-button CartWidget__drop-button--checkout">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartWidget;
